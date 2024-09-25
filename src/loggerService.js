import axios from 'axios';
import UAParser from 'ua-parser-js';

const loggerServiceURL = process.env.REACT_APP_LOGGER_SVC_URL; // URL of your logger service

export const logClientInfo = (logLevel, message, errorDetails) => {
  // Capture client info using UAParser
  const parser = new UAParser();
  const browserInfo = parser.getResult();
  
  // Get client IP (this can be enhanced with external APIs to fetch IP)
  const clientIP = window.location.hostname;

  const logData = {
    level: logLevel, // e.g., 'info', 'error'
    message: message,
    isDefault: false,
    label: "Portfolio",
    meta: {
      browser: browserInfo.browser.name,      
      os: browserInfo.os.name,                
      ip: clientIP,
      errorDetails                 
    }
  };

  // Send log data to logger service
  axios.post(loggerServiceURL, logData)
    .then(response => console.log('Log sent successfully:', response))
    .catch(error => console.error('Error sending log:', error));
};
