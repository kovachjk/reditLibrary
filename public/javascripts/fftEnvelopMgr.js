/**
 * Created by johnk on 7/9/2016.
 * Copyright Stillbright Management LLC 2015
 * Desc: This file contains routines for the creation of and monitoring of
 * envelop alarms.
 * Usage: This module will be used during the configuration of waveform acquisitions and when an acquisition
 * is implemented.  The acquisition object is expected to have a flag that is set during configuration that 
 * tell the acquisition engine to run the alarm rule set
 * Functional Requirements:
 * Build rule set from data array.
 * Implement learn mode by enabling the build rule set function to modify(increase) alarm rule settings.
 */
/**
 * Alarm Segment:
 * An object used to determine if a number in an array is within a predetermined range.
 * An alarm segment represents a line, with start and end points and alarm levels within those points.
 * Arrays of alarm segments are used by the monitor alarm object (eAO) to determine if that particular waveform
 * or FFT array point is in alarm.
 * @type {{}}
 */
const alarmSegment = {
   start:0,
   end:0,
   lowLow:0,
   low:0,
   high:0,
   highHigh:0
};
var alarmSegments = {
   floorYellow: 1,//milli units(g's inch/sec, mils
   floorRed: 2,
   units:'inchSec', // no other choice for the foreseeable future. 
   alarmSegArray:[]
}
var eAM = (function () {
   
   var alarmSegmentMgr = [];
   return{
      loadAlarms: function(jsonString){

      },
      buildEnvAlarms: function(int16DataArray){
         
      }

   }
   function loadAlarms() {

   }
})();