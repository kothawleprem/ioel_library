/*************************************************************

  This is a simple demo of sending and receiving some data.
  Be sure to check out other examples!
 *************************************************************/

// Template ID, Device Name and Auth Token are provided by the Blynk.Cloud
// See the Device Info tab, or Template settings
#define BLYNK_TEMPLATE_ID           "TMPLH6q3javn"
#define BLYNK_DEVICE_NAME           "Quickstart Device"
#define BLYNK_AUTH_TOKEN            "URDo1x4O4QVbphoJMxyDBvATiuqSlvla"


// Comment this out to disable prints and save space
#define BLYNK_PRINT Serial


#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

char auth[] = BLYNK_AUTH_TOKEN;

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "PK";
char pass[] = "1234567890";

const int TRIG_PIN  = D3; // Arduino pin connected to Ultrasonic Sensor's TRIG pin
const int ECHO_PIN  = D0; // Arduino pin connected to Ultrasonic Sensor's ECHO pin
const int DISTANCE_THRESHOLD = 20; // centimeters

const int light1 = D1;
const int light2 = D2;
const int outsideLight = D4;
const int fan = D5;

// variables will change:
float duration_us, distance_cm;

BlynkTimer timer;

// This function is called every time the Virtual Pin 0 state changes
BLYNK_WRITE(V0)
{
  // Set incoming value from pin V0 to a variable
  int value = param.asInt();
  
  // Update state
  Blynk.virtualWrite(V1, value);
  Serial.print(value);
  if(value==1){
    Serial.print("one");
    digitalWrite(light1, HIGH);
  }
  else{
    Serial.print("none");
    digitalWrite(light1, LOW);
  }
}

BLYNK_WRITE(V4)
{
  // Set incoming value from pin V0 to a variable
  int value = param.asInt();

  // Update state
//  Blynk.virtualWrite(V4, value);
  Serial.print(value);
  if(value==1){
    Serial.print("one");
    digitalWrite(light2, HIGH);
  }
  else{
    Serial.print("none");
    digitalWrite(light2, LOW);
  }
}


BLYNK_WRITE(V6)
{
  // Set incoming value from pin V0 to a variable
  int value = param.asInt();

  // Update state
//  Blynk.virtualWrite(V4, value);
  Serial.print(value);
  if(value==0){
    Serial.print("one");
    digitalWrite(fan, HIGH);
  }
  else{
    Serial.print("none");
    digitalWrite(fan, LOW);
  }
}

BLYNK_WRITE(V7)
{
  // Set incoming value from pin V0 to a variable
  int value = param.asInt();
  

  Serial.print(value);
  if(value==1){
    Serial.print("one");
    digitalWrite(outsideLight, HIGH);
  }
  else{
    Serial.print("none");
    digitalWrite(outsideLight, LOW);
  }
}

// This function is called every time the device is connected to the Blynk.Cloud
BLYNK_CONNECTED()
{
  // Change Web Link Button message to "Congratulations!"
  Blynk.syncAll();
}

// This function sends Arduino's uptime every second to Virtual Pin 2.
void myTimerEvent()
{
  // You can send any value at any time.
  // Please don't send more that 10 values per second.
  Blynk.virtualWrite(V2, millis() / 1000);
}

void setup()
{
  // Debug console
  Serial.begin(115200);
   pinMode(light1, OUTPUT); 
   pinMode(light2, OUTPUT); 
   pinMode(outsideLight, OUTPUT); 
   pinMode(fan,OUTPUT);
   pinMode(TRIG_PIN, OUTPUT);  // set arduino pin to output mode
   pinMode(ECHO_PIN, INPUT);   // set arduino pin to input mode
  Blynk.begin(auth, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, ssid, pass, "blynk.cloud", 80);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8080);

  // Setup a function to be called every second
  timer.setInterval(1000L, myTimerEvent);
}

void loop()
{
  // generate 10-microsecond pulse to TRIG pin
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  // measure duration of pulse from ECHO pin
  duration_us = pulseIn(ECHO_PIN, HIGH);
  // calculate the distance
  distance_cm = 0.008 * duration_us;

  if(distance_cm < DISTANCE_THRESHOLD)
  {
    digitalWrite(outsideLight, LOW); // turn on Relay
    Blynk.virtualWrite(V7, LOW);
  }
  else
  {
     digitalWrite(outsideLight, HIGH);  // turn off Relay
    Blynk.virtualWrite(V7, HIGH);
  }
   
  // print the value to Serial Monitor
  Serial.print("distance: ");
  Serial.print(distance_cm);
  Serial.println(" cm");

  delay(500);
  Blynk.run();
  timer.run();
  // You can inject your own code or combine it with other sketches.
  // Check other examples on how to communicate with Blynk. Remember
  // to avoid delay() function!
}
