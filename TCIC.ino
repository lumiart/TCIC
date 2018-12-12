#include <WiFi.h>
//arest

//WIFI CONNECTION
const char* newtworkName = "108_2";
const char* networkPass = "ufsj_cap_2018";

// Create an instance of the server
// specify the port to listen on as an argument
WiFiServer server(8080);
const int portaLDR = GPIO_NUM_35;
const int LED = 15;
bool LDR = true;
int lightVal;   // light reading

void setup() {
  Serial.begin(115200);
  delay(10);
  Serial.println("Welcome to debug mode for Automation System\n");
  pinMode(portaLDR,INPUT);
  pinMode(LED, OUTPUT);
  delay(100);
  int freq = 5000;
  int resolution = 8;
  ledcSetup(1, freq, resolution);
  ledcSetup(2, freq, resolution);
  ledcSetup(3, freq, resolution);
  ledcSetup(4, freq, resolution);
  ledcSetup(5, freq, resolution);
  
  
  //just for tests
  ledcAttachPin(14, 3);
  ledcAttachPin(12, 1);
  ledcAttachPin(13, 2);
  ledcAttachPin(2, 4);
  ledcAttachPin(34, 5);
  ledcWrite(1, 0);
  ledcWrite(2, 0);
  ledcWrite(3, 0);
  ledcWrite(4, 0);
  ledcWrite(5, 0);

  // Connect to WiFi network
  Serial.print("Trying Connecting to newtork: ");
  Serial.print(newtworkName);
  WiFi.mode(WIFI_STA);
  WiFi.begin(newtworkName, networkPass);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print("\nStill not connected :/\n");
  }
  Serial.println("wifi has been successfully connected");

  // Start the server
  server.begin();
  Serial.println("Server started, is running on IP: ");
  Serial.println( WiFi.localIP());

}





void loop() {
  lightVal = analogRead(portaLDR);
  //Serial.println(lightVal);
  if((lightVal <= 1800) && LDR==true ){
    digitalWrite(LED,HIGH);
  }else{
    digitalWrite(LED,LOW);
  }
  
  WiFiClient client = server.available();
  if (!client) {
    return;
  }
  
  while (!client.available()) {
    //waiting while there is no client
    delay(10);
  }
  // Read the first line of the request
  String req = client.readStringUntil('\r');
  Serial.println(req);
  client.flush();
  delay(50);
  // Match the request
  String val;
  String portNumber;
  String s;

  
if (req.indexOf("/LDR") != -1) {
  LDR = !LDR;
  val = lightVal;
  Serial.println(val);
  Serial.println("Client disconnected"); 
}

if (req.indexOf("/digital/write") != -1) {

    String cleanUrl = getCleanURL(req);
    ///write/digital/ has 14 caracteres
    String portNumberAndAction =  cleanUrl.substring(15);
    String action = portNumberAndAction.substring(3, 4);
    String portNumber = portNumberAndAction.substring(0, 2);
    String color = portNumberAndAction.substring(5, 8);
    Serial.print("PortNumberAndAction: ");
    Serial.println(portNumberAndAction);

    Serial.print("portNumber: ");
    Serial.println(portNumber);

    Serial.print("action: ");
    Serial.println(action);

    Serial.print("Color: ");
    Serial.println(color);
    if(portNumber.toInt() == 12){
      //relay light is inverted
      if(action.toInt() == 1) {
        ledcWrite(1, color.toInt());
        
      } 
      else {
        ledcWrite(1, 0);
      }
    }
    if(portNumber.toInt() == 13){
      //relay light is inverted
      if(action.toInt() == 1) {
        ledcWrite(2, color.toInt());
      } 
      else {
        ledcWrite(2, 0);
      }
    }
    if(portNumber.toInt() == 14){
      //relay light is inverted
      if(action.toInt() == 1) {
        ledcWrite(3, color.toInt());
      } 
      else {
        ledcWrite(3, 0);
      }
    }
    if(portNumber.toInt() == 2){
      //relay light is inverted
      if(action.toInt() == 1) {
        ledcWrite(4, 255);
      } 
      else {
        ledcWrite(4, 0);
      }
    }
       if(portNumber.toInt() == 25){
      //relay light is inverted
      if(action.toInt() == 1) {
        ledcWrite(6, 255);
      } 
      else {
        ledcWrite(6, 0);
      }
    }
        if(portNumber.toInt() == 34){
      //relay light is inverted
      if(action.toInt() == 1) {
        ledcWrite(5, 255);
      } 
      else {
        ledcWrite(5, 0);
      }
    }
  }

  

  // The client will actually be disconnected
  // when the function returns and 'client' object is detroyed
}

String getCleanURL(String url) {
  //is something like 'POST /changeServo/5 HTTP/1.1'
  int firstSpace = url.indexOf(" ");
  int secondSpace = url.lastIndexOf(" ");
  //and returns something like '/changeServo/5'
  return url.substring(firstSpace + 1, secondSpace);
}
