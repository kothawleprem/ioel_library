
#define BLYNK_TEMPLATE_ID "TMPLzd_jG6Z0"
#define BLYNK_DEVICE_NAME "test"
#define BLYNK_AUTH_TOKEN "MU0Cw-3RDeVyru4GBXcTlezXFrFyz0YC"

char ssid[] = "PK";
char pass[] = "1234567890";
char auth[] = BLYNK_AUTH_TOKEN;

// Comment this out to disable prints and save space
#define BLYNK_PRINT Serial


#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>


BlynkTimer timer;

int IR_sensor1 = D1;
int LED1 = D7;
int IR_sensor2 = D2;
int LED2 = D6;
int IR_sensor3 = D3;
int LED3 = D8;

WidgetLED led1(V2);// Virtual Pin V2
WidgetLED led2(V3);// Virtual Pin V3
WidgetLED led3(V4);// Virtual Pin V4

void myTimerEvent()
{
  // You can send any value at any time.
  // Please don't send more that 10 values per second.
  Blynk.virtualWrite(V2, millis() / 1000);
}

void sensor1(){
  int value = digitalRead(IR_sensor1);
  if(value == HIGH){
    led1.off();
    digitalWrite(LED1,LOW);
    Blynk.virtualWrite(V3, LOW);
  }
  else{
    led1.on();
    digitalWrite(LED1,HIGH);
    Blynk.virtualWrite(V3, HIGH);
  }  
}

void sensor2(){
  int value = digitalRead(IR_sensor2);
  if(value == HIGH){
    led2.off();
    digitalWrite(LED2,LOW);
    Blynk.virtualWrite(V4, LOW);
  }
  else{
    led2.on();
    digitalWrite(LED2,HIGH);
    Blynk.virtualWrite(V4, HIGH);
  }  
}

void sensor3(){
  int value = digitalRead(IR_sensor3);
  if(value == HIGH){
    led3.off();
    digitalWrite(LED3,LOW);
    Blynk.virtualWrite(V5, LOW);
  }
  else{
    led3.on();
    digitalWrite(LED3,HIGH);
    Blynk.virtualWrite(V5, HIGH);
  }  
}

void setup()
{
  pinMode(LED1, OUTPUT);
  pinMode(IR_sensor1,INPUT);
  pinMode(LED2, OUTPUT);
  pinMode(IR_sensor2,INPUT);
  pinMode(LED3, OUTPUT);
  pinMode(IR_sensor3,INPUT);
  Serial.begin(9600);
  Blynk.begin(auth, ssid, pass);
  timer.setInterval(300L,sensor1);
  timer.setInterval(300L,sensor2);
  timer.setInterval(300L,sensor3);
}

void loop()
{
  Blynk.run();
  timer.run();
}
