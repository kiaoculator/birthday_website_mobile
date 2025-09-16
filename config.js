const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🏠 Home Page
  recipientName: "John Doe", // Name of the birthday person
  homeMessages: [
    "Hi John Doe", // First greeting message
    "I have something to show you:)" // Second message that appears after clicking
  ],

  // 📸 Pictures Page  
  picturesTitle: "You're Getting Old! :P", // Title displayed over the pictures
  picturesLoadingText: "Loading images...", // Text shown while images are loading
  picturesMessage: "Add your own images by putting them in the assets folder and import them.", // Instructions for adding images

  // 💌 Birthday Card Page
  cardFrontTitle: "Happy Birthday!", // Title on the front of the card
  cardInsideTitle: "Happy Birthday, John Doe!", // Title inside the card
  cardMessage: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque delectus dolore recusandae eveniet dicta. Corrupti.", // First paragraph in the card
    "I hope you have a very blessed birthday!", // Second paragraph
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, cum.", // Third paragraph
    "Lorem ipsum dolor sit amet consectetur adipisicing elit." // Fourth paragraph
  ],
  cardSignature: "Jane Doe", // Who the card is from
  nextPageButtonText: "Next Page", // Text for the next page button

  // 🎂 Cake Page
  cakeTitle: "Happy Birthday!", // Title shown after blowing out candles
  cakeBlowInstructions: "blow", // Text that appears to instruct blowing
  cakePermissionDelay: 10000, // Delay in milliseconds before asking for microphone permission
  cakeBlowThreshold: 100, // Audio threshold for detecting blowing (adjust if too sensitive)
  cakeBlowDuration: 1500, // Required blow duration in milliseconds
  
  // 🎁 Present Page
  presentTitle: "Click the box to see your gifts!", // Title above the gift box
  gifts: [
    "Free\nPedicure", // First gift (use \n for line breaks)
    "Free\nMassage", // Second gift
    "Free\nDinner" // Third gift
  ],

  /* 
  ████████████████████████████████████████
  🎨 STYLING SETTINGS (EDIT CAREFULLY)
  ████████████████████████████████████████
  */

  // 🎨 Colors and Styling
  primaryTextColor: "text-customBlue", // Main text color class
  buttonColor: "bg-customBlue", // Button background color
  buttonHoverColor: "hover:bg-blue-600", // Button hover color
  buttonTextColor: "text-white", // Button text color

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 🔗 Navigation Paths
  routes: {
    home: "/",
    pictures: "/pictures", 
    card: "/card",
    cake: "/cake",
    present: "/present"
  },

  // 📱 Responsive Settings
  containerMaxWidth: "max-w-[400px]", // Maximum width for containers
  containerWidth: "w-[90%]", // Default container width
  
  // 🎭 Animation Settings
  fadeInDuration: 1.2, // Duration for fade-in animations in seconds
  cardOpenDelay: 1000, // Delay for card opening animation in milliseconds
  
  // 🎵 Audio Detection Settings (Cake Page)
  audioSettings: {
    fftSize: 512, // FFT size for audio analysis
    lowFrequencySlice: 15, // Number of low frequency bins to analyze
    blowDetectionDelay: 200 // Delay before resetting blow detection
  }
};

export default config;
