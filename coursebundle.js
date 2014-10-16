function CourseBundle(name, id, price, descriptionHead, description, image) {
  this.name = name;
  this.id = id;
  this.price = price;
  this.descriptionHead = descriptionHead;
  this.description = description
  this.image = image;
  this.courses = [];
  this.features = [];
  this.suggestedCourses = [];
}

function Course(name, image) {
  this.name = name;
  this.image = image;
}

CourseBundle.prototype.addCourse = function(course) {
  this.courses.push(course);
}

CourseBundle.prototype.addFeature = function(feature) {
  this.features.push(feature);
}

CourseBundle.prototype.addSuggestedCourse = function(course) {
  this.suggestedCourses.push(course);
}

// Create and add to courseBundles
var courseBundles = [];


// Android App Development Bundle
var androidApp = new CourseBundle("Android App Development Bundle", "SKU 06-A0077",
  "$229", "<b>description</b>", "");

var androidDescHead = "The Android App Development course bundle includes everything you need to become a professional Android app developer.";
var androidDesc = "The Android app marketplace is the fastest growing marketplace in the world. If you're serious about becoming an app developer, then you need to know Android development. Android development offers a low cost solution for beginning developers to learn the ropes and get those apps out on the market.";

androidApp.descriptionHead = androidDescHead;
androidApp.description = androidDesc;

androidApp.addCourse(new Course("Build Your First Android App with Java", ""));
androidApp.addCourse(new Course("Learn Java Programming From Scratch", ""));
androidApp.addCourse(new Course("Build Android Apps in 1 Hour With No Coding Required", ""));

androidApp.addFeature("Over 17 hours of instruction");
androidApp.addFeature("Learn the programming language used in Android development");
androidApp.addFeature("How to install and use Android app development software");
androidApp.addFeature("Source Codes Included");
androidApp.addFeature("Learn user interface design");
androidApp.addFeature("Learn graphic layout and design");
androidApp.addFeature("Learn Google Maps, Facebook and Twitter Integration");
androidApp.addFeature("Start your own app development business");
androidApp.addFeature("Lifetime access to course materials");

androidApp.addSuggestedCourse(new Course("Build Android Apps in 1 Hour with No Coding Required", ""));
androidApp.addSuggestedCourse(new Course("Build iPhone, iPad and Android Apps with IBuildApp App Builder", ""));
androidApp.addSuggestedCourse(new Course("Build Your First Android App with Java", ""));
androidApp.addSuggestedCourse(new Course("iPhone and Android HTML5 Apps for Beginners", ""));

courseBundles.push(androidApp);


// Become a Better Photographer Bundle
var betterPhotog = new CourseBundle("Become a Better Photographer Bundle", "SKU 06-A0103",
  "$99", "<b>description</b>", "");

var betterPhotogDesc = "The Become a Better Photogrpher bundle includes two great photography courses from Master Photographer, Bernie Raffe. Bernie's fun and exciting teaching style will keep you engaged from beginning to end. There are over 50 unique photography tips as well as more advanced photography training included in this bundle.";

betterPhotog.descriptionHead = betterPhotogDesc;


// Better Photog courses
betterPhotog.addCourse(new Course("Become a Better Photographer: Part 1", ""));
betterPhotog.addCourse(new Course("Become a Better Photographer: Part 2", ""));

betterPhotog.addFeature("Over 80 lectures and 9 hours of content");
betterPhotog.addFeature("This course will give you a greater understanding of your camera's features and settings");
betterPhotog.addFeature("This greater understanding will allow you to get more consistent exposures, better focusing and improved image quality");
betterPhotog.addFeature("To demonstrate easy tips for getting sharp images");
betterPhotog.addFeature("To show how an understanding of light and composition is worth more to you than a whole bagful of camera accessories");
betterPhotog.addFeature("Raise awareness of the possibilities for taking great photos");
betterPhotog.addFeature("To demonstrate easy ways of taking amazing outdoor portraits");
betterPhotog.addFeature("To show some great ways of getting better landscape photos");
betterPhotog.addFeature("To provide tips on getting better flash photos indoors");
betterPhotog.addFeature("To show how to take better photos in specific environments (e.g snow, indoors by a window etc...)");
betterPhotog.addFeature("To help understand image quality, resolution and the different camera types");
betterPhotog.addFeature("To realise the great potential you have for becoming a great photographer");
betterPhotog.addFeature("The real world examples provide best settings in typical scenarios, ensuring great results");

courseBundles.push(betterPhotog);


// Become a Commercial Photographer from Scratch
var commerPhotog = new CourseBundle("Become a Commercial Photographer from Scratch", "SKU 06-A0072",
  "$149", "<b>description</b>", "");

var commerPhotogDesc = "Commercial photographers are some of the highest paid professionals in the industry. It's true; rates can run $1000, $2000, and even $5000 per day plus expenses. A career in commercial photography is extremely exciting, and you could soon be traveling the world on assignment, living for yourself and not your boss.";

commerPhotog.descriptionHead = commerPhotogDesc;

commerPhotog.addFeature("24 Hour Online Course");
commerPhotog.addFeature("Perfect for Beginners");
commerPhotog.addFeature("Learn from an Award Winning Photographer");
commerPhotog.addFeature("Learn What Equipment to Buy");
commerPhotog.addFeature("Learn Tips and Tricks of Photography Professionals");
commerPhotog.addFeature("Watch Actual Photo Shoots in Action");
commerPhotog.addFeature("Learn How to Make Money in Commercial Photography");
commerPhotog.addFeature("Lifetime Access to Course Materials");

commerPhotog.addSuggestedCourse(new Course("Become a Better Photographer", ""));
commerPhotog.addSuggestedCourse(new Course("Easy DSLR Digital Photography Course: Advanced", ""));
commerPhotog.addSuggestedCourse(new Course("Easy DSLR Online Digital Photography Course for Beginners", ""));
commerPhotog.addSuggestedCourse(new Course("Beginning Photography Course Bundle", ""));

courseBundles.push(commerPhotog);


// Become a Professional Web Developer
var profDev = new CourseBundle("Become a Professional Web Developer", "SKU 06-A0123",
  "$299", "<b>description</b>", "");

var profDevDescHead = "We call this Become a Professional Web Developer not because we think we're great, but because this is hands down the <b>most in depth course on web development</b> in town.";
var profDevDesc = "The design and structure of this course follows elite college curriculum. You will begin by learning the basics of each programming language and technology web developers use, and you will be creating real life projects with every new skill you learn so you're getting the entire finished puzzle instead of just pieces that you have to put together yourself.";

profDev.description = profDevDesc;
profDev.descriptionHead = profDevDescHead;

profDev.addFeature("Over 332 lectures and 55+ hours of content!");
profDev.addFeature("Lifetime access to course materials");
profDev.addFeature("Source codes included");
profDev.addFeature("Learn every skill needed as a professional web developer/designer");
profDev.addFeature("Create real life projects for your portfolio");
profDev.addFeature("Become a professional web developer");

profDev.addSuggestedCourse(new Course("CSS and CSS3 Crash Course", ""));
profDev.addSuggestedCourse(new Course("Learn PHP programming From Scratch", ""));
profDev.addSuggestedCourse(new Course("PHP Object Oriented Programming | Build a Login System", ""));

courseBundles.push(profDev);


// Become a Video Game Developer From Scratch Course Bundle
var videoScratch = new CourseBundle("Become a Video Game Developer From Scratch Course Bundle",
  "SKU 06-A0060", "$999", "<b>description</b>", "");

var videoScratchDescHead = "Are you interested in becoming a video game developer? Do you love games and want to learn how they're made? If so, then you're in the right place!"; 
var videoScratchDesc = "Video game development is a multi-billion dollar a year industry. Video game developers are in great demand, and make great salaries. The only thing stopping you from starting a career you love and can be proud of is that you haven't taken this course.";

videoScratch.description = videoScratchDesc;
videoScratch.descriptionHead = videoScratchDescHead;

videoScratch.addFeature("50 Hour Online Course");
videoScratch.addFeature("No Prior Experience Required - Perfect for Beginners");
videoScratch.addFeature("Gain Valuable Job Skills");
videoScratch.addFeature("Build Your Own 2D and 3D Games");
videoScratch.addFeature("Publish to Multiple Platforms, Both Console and Mobile");
videoScratch.addFeature("Learn in Plain English - No Technical Documentation to Suffer Through");
videoScratch.addFeature("Lifetime Access to All Course Material");

videoScratch.addSuggestedCourse(new Course("Create Games with Stencyl: No Coding Required", ""));
videoScratch.addSuggestedCourse(new Course("Create HTML5 Games From Scratch", ""));
videoScratch.addSuggestedCourse(new Course("Make HTML5 Games with No Coding Required", ""));
videoScratch.addSuggestedCourse(new Course("Game Development for Non Coders Bundle", ""));

courseBundles.push(videoScratch);


// Beginning Photography Course Bundle
var begPhotog = new CourseBundle("Beginning Photography Course Bundle", "SKU 06-A0083",
  "$89", "<b>description</b>", "");

var begPhotogDescHead = "Are you interested in photography? Perhaps you want to take better photos of your family or your vacations. Perhaps you want to start a business taking photos for weddings or senior pictures. Whatever the reason for wanting to take better photos, this beginning photography online course bundle is for you.";
var begPhotogDesc = "Learn the tips of professional photography from master photographer Bernie Raffe. Using his characteristic fun and exciting teaching style, Bernie will walk you through more than 50 individual photography secrets that you can use whether you want to start a business or simply take better photos.";

begPhotog.description = begPhotogDesc;
begPhotog.descriptionHead = begPhotogDescHead;

begPhotog.addCourse(new Course("Become a Better Photographer", ""));
begPhotog.addCourse(new Course("Photoshop CS6 Crash Course", ""));

begPhotog.addFeature("5 1/2 hour digital photography course");
begPhotog.addFeature("4 hour Photoshop course");
begPhotog.addFeature("Sample Photoshop files included");
begPhotog.addFeature("Perfect for beginners or those with some experience");
begPhotog.addFeature("Fun learning style");
begPhotog.addFeature("Lifetime access to course materials");

begPhotog.addSuggestedCourse(new Course("Become a Better Photographer", ""));
begPhotog.addSuggestedCourse(new Course("Easy DSLR Digital Photography Course: Advanced", ""));
begPhotog.addSuggestedCourse(new Course("Easy DSLR Digital Photography Course Bundle", ""));
begPhotog.addSuggestedCourse(new Course("Become a Commercial Photographer from Scratch", ""));

courseBundles.push(begPhotog);


// Develop iPhone and Android Apps with No Coding Required Course Bundle
var phoneNoCode = new CourseBundle("Develop iPhone and Android Apps with No Coding Required Course Bundle",
  "SKU 06-A0062", "$299", "<b>description</b>", "");

var phoneNoCodeDesc = "So you want to learn to develop mobile apps. The problem is that learning to write programming code is time consuming and quite difficult. We have two online courses that will show you how you can do it. This is no trick or gimmick. You need to learn how to make apps, but you don't need to learn how to write programming code, which is by far the most time consuming part of learning app development.";

phoneNoCode.descriptionHead = phoneNoCodeDesc;

phoneNoCode.addFeature("6 Hour iPhone App Development Course");
phoneNoCode.addFeature("11 Hour Android App Development Course");
phoneNoCode.addFeature("Build iPhone and Android Apps Without Learning Computer Programming");
phoneNoCode.addFeature("Learn How to Upload Your Apps to the Apple App Store and Android Market");
phoneNoCode.addFeature("All App Development Software is Free to Use");
phoneNoCode.addFeature("Build More than 40 Unique Apps");
phoneNoCode.addFeature("Over 500 App Developer Icons for Free");
phoneNoCode.addFeature("Lifetime access to course materials");

phoneNoCode.addSuggestedCourse(new Course("Build Android Apps in 1 Hour with No Coding Required", ""));
phoneNoCode.addSuggestedCourse(new Course("Build iPhone and iPad Apps with Xcode for Beginners", ""));
phoneNoCode.addSuggestedCourse(new Course("Build iPhone Apps in 1 Hour with No Coding Required", ""));
phoneNoCode.addSuggestedCourse(new Course("Build iPhone, iPad and Android Apps with iBuildApp App Builder", ""));

courseBundles.push(phoneNoCode);


// Easy DSLR Digital Photography Course Bundle
var dslrPhotog = new CourseBundle("Easy DSLR Digital Photography Course Bundle", "SKU 06-A0067",
  "$149", "<b>description</b>", "");

dslrPhotogDesc = "Most new DSLR camera owners use very little of the potential of their cameras. (DSLR = Digital Single Lens Reflex). The thought of moving off AUTO can be daunting. To really get creative control over your photos you need to grasp some basic photography principles - it's not 'rocket science' - but it is essential. This course fills that gap in knowledge so you can get into the more creative modes of your camera and start taking better photos.";

dslrPhotog.descriptionHead = dslrPhotogDesc;

dslrPhotog.addFeature("5 Hour Online Beginners Course");
dslrPhotog.addFeature("6 1/2 Hour Online Advanced Course");
dslrPhotog.addFeature("No Prior Experience Required - Perfect for Beginners");
dslrPhotog.addFeature("Discover the Secrets of Photography Professionals");
dslrPhotog.addFeature("You Don't Need a College Degree to Take Great Photos");
dslrPhotog.addFeature("Learn From a Long-Time Professional Photographer");
dslrPhotog.addFeature("All the Knowledge You Need to Take Professional Photographs All in One Place");
dslrPhotog.addFeature("Presented in Plain English - No More 400 Page Technical Manuals");
dslrPhotog.addFeature("Earn a Course Completion Certificate");
dslrPhotog.addFeature("12 Month Access to All Course Materials");

dslrPhotog.addSuggestedCourse(new Course("Become a Better Photographer", ""));
dslrPhotog.addSuggestedCourse(new Course("The Absolute Beginner's Guide to Flash Photography", ""));
dslrPhotog.addSuggestedCourse(new Course("The Absolute Beginners's Guide to Studio Portraiture", ""));
dslrPhotog.addSuggestedCourse(new Course("Photoshop CS6 Crash Course", ""));

courseBundles.push(dslrPhotog);


// Game Development for Non Coders Bundle
var gameDevNoCode = new CourseBundle("Game Development for Non Coders Bundle", "SKU 06-A0082",
  "$399", "<b>description</b>", "");

var gameDevNoCodeDescHead = "Have you ever thought it would be fun to make games, but have never done it because you don't know how to write programming code? We have a solution for you!";
var gameDevNoCodeDesc = "Learn to make your own fun and exciting games with no coding required by getting this bundle of two online courses. Each course shows you how to make your own games using either the Stencyl or Construct 2 game engines. These powerful and popular game engines will make your games come to life.";

gameDevNoCode.description = gameDevNoCodeDesc;
gameDevNoCode.descriptionHead = gameDevNoCodeDescHead;

gameDevNoCode.addCourse(new Course("Create Games with Stencyl: No Coding Required", ""));
gameDevNoCode.addCourse(new Course("Make HTML5 Games with No Coding Required", ""));
gameDevNoCode.addCourse(new Course("Learn 3D Game Development with Unity 3D", ""));

gameDevNoCode.addFeature("Create Games with Stencyl: No Coding Required online course");
gameDevNoCode.addFeature("Make HTML5 Games with No Coding Required online course");
gameDevNoCode.addFeature("Learn 3D Game Development with Unity 3D online course (A $49 value for free!)");
gameDevNoCode.addFeature("Over 30 hours of video training");

gameDevNoCode.addSuggestedCourse(new Course("Learn 3D Game Development with Unity 3D", ""));
gameDevNoCode.addSuggestedCourse(new Course("Become a Video Game Developer From Scratch Course Bundle", ""));

courseBundles.push(gameDevNoCode);


// HTML5 App & Game Development Bundle
var htmlGameDev = new CourseBundle("HTML5 App & Game Development Bundle", "SKU 06-A0078",
  "$699", "<b>description</b>", "");

var htmlGameDevDescHead = "The HTML5 App & Game Development course bundle includes everything you need to become a professional HTML5 developer.";
var htmlGameDevDesc = "We can all read the writing on the wall: HTML5 is going to overtake native app development (iOS, Android and Windows Phone) over the next few years due to its cross-device compatibility. Get ahead of the curve now by learning the fundamentals of HTML5 and how to build mobile apps and games that you can publish to any platform.";

htmlGameDev.description = htmlGameDevDesc;
htmlGameDev.descriptionHead = htmlGameDevDescHead;

htmlGameDev.addCourse(new Course("iPhone & Android HTML5 Apps for Beginners", ""));
htmlGameDev.addCourse(new Course("BlackBerry 10 HTML5 App Development", ""));
htmlGameDev.addCourse(new Course("HTML5 Game Development with LimeJS", ""));
htmlGameDev.addCourse(new Course("Create HTML5 Games From Scratch", ""));
htmlGameDev.addCourse(new Course("Fundamentals of HTML", ""));
htmlGameDev.addCourse(new Course("Advanced HTMl", ""));
htmlGameDev.addCourse(new Course("Fundamentals of HTML5", ""));
htmlGameDev.addCourse(new Course("Learn to Make an Educational Game", ""));
htmlGameDev.addCourse(new Course("Learn to Make Veggies vs. Zombies", ""));

htmlGameDev.addFeature("Over 23 hours of instruction");
htmlGameDev.addFeature("Learn the HTML5 programming language");
htmlGameDev.addFeature("Build several HTML5 mobile apps");
htmlGameDev.addFeature("Build several HTML5 games");
htmlGameDev.addFeature("Learn to publish to all the major marketplaces");
htmlGameDev.addFeature("Start your own app or game development business");
htmlGameDev.addFeature("Lifetime access to course materials");

htmlGameDev.addSuggestedCourse(new Course("CSS and CSS3 Crash Course", ""));
htmlGameDev.addSuggestedCourse(new Course("Make HTML5 Games with No Coding Required", ""));
htmlGameDev.addSuggestedCourse(new Course("Become a Video Game Developer From Scratch Course Bundle", ""));
htmlGameDev.addSuggestedCourse(new Course("How to Set Up Your Own Cloud Server from Scratch", ""));

courseBundles.push(htmlGameDev);


// iPhone & iPad App Development Bundle
var phonePadDev = new CourseBundle("iPhone & iPad App Development Bundle", "SKU 06-A0076",
  "$590", "<b>description</b>", "");

var phonePadDevDescHead = "The iOS App Development course bundle includes everything you need to become a professional iPhone and iPad app developer.";
var phonePadDevDesc = "We all know that iPhone and iPad apps have been the hottest market for apps and games for years now. The iOS development system allows for fluid, robust app development that can pale in comparison to other app markets. There is still lots of money to be made in the iOS app market, whether you want to build apps for yourself or for others.";

phonePadDev.description = phonePadDevDesc;
phonePadDev.descriptionHead = phonePadDevDescHead;

phonePadDev.addCourse(new Course("Build iPhone and iPad Apps with Xcode for Beginners", ""));
phonePadDev.addCourse(new Course("iOS App Development: A Project-Based Approach", ""));
phonePadDev.addCourse(new Course("Objective C Programming: iOS App Development Starts Here", ""));
phonePadDev.addCourse(new Course("Programming: Learn the Basics of iPhone App Development", ""));

phonePadDev.addFeature("33 hours of instruction");
phonePadDev.addFeature("Learn the programming languages used in iOS development");
phonePadDev.addFeature("How to install and use Xcode app development software");
phonePadDev.addFeature("Understanding the Xcode user interface");
phonePadDev.addFeature("Learn over 100 unique things you can add to your apps");
phonePadDev.addFeature("Learn user interface design");
phonePadDev.addFeature("Learn graphic layout and design");
phonePadDev.addFeature("Working with APIs");
phonePadDev.addFeature("Start your own app development business");
phonePadDev.addFeature("Lifetime access to course materials");

phonePadDev.addSuggestedCourse(new Course("Build iPhone and iPad Apps with Xcode for Beginners", ""));
phonePadDev.addSuggestedCourse(new Course("Build iPhone Apps in 1 Hour with No Coding Required", ""));
phonePadDev.addSuggestedCourse(new Course("iPhone and Android HTMl5 Apps for Beginners", ""));

courseBundles.push(phonePadDev);


// Social Media Marketing Bundle
var socialMark = new CourseBundle("Social Media Marketing Bundle", "SKU 06-A0086",
  "$249", "<b>description</b>", "");

var socialMarkDescHead = "Social media marketing is more important than ever these days. If you own a business or work for a company that lacks in social media presence, then this course bundle is for you."; 
var socialMarkDesc = "If you are simply ignoring social media because you don't quite understand how it works, then you are leaving money on the table. You are also missing opportunities to interact with your customers, grow your customer base and go viral through the social web.";

socialMark.description = socialMarkDesc;
socialMark.descriptionHead = socialMarkDescHead;

socialMark.addCourse(new Course("Leverage YouTube to Drive Sales and Traffic", ""));
socialMark.addCourse(new Course("Marketing on Pinterest for Businesses", ""));
socialMark.addCourse(new Course("Twitter Essentials for Businesses", ""));
socialMark.addCourse(new Course("Facebook Page Essentials", ""));
socialMark.addCourse(new Course("LinkedIn Essentials", ""));
socialMark.addCourse(new Course("Google Plus Essentials", ""));

socialMark.addSuggestedCourse(new Course("Automate Social Media Sharing on Your WordPress Site", ""));
socialMark.addSuggestedCourse(new Course("Build Your Own Online Business with WordPress", ""));
socialMark.addSuggestedCourse(new Course("Beginning Photography Course Bundle", ""));

courseBundles.push(socialMark);


// The Compelete Web Developer Package
var completeWebDev = new CourseBundle("The Compelete Web Developer Package", "SKU 06-A0055",
  "$199", "<b>description</b>", "");

var completeWebDevDescHead = "Perfect for beginners, The Complete Web Developer Package of online courses takes you from absolute beginner to a professional developer in no time at all. Learn Everything You Need to Know to Become a Website Developer. Course Includes: HTML, HTML5, CSS, CSS3, JavaScript, Ajax, jQuery, PHP and MySQL."; 
var completeWebDevDesc = "This is The Complete Web Developer: The Everything You Need To Know web development course about making websites. TCWD (The Complete Web Developer) will take you through over 18 hours of video content while being able to follow along with what I'm saying in each video. Each class has examples we go through, and explanations of how everything works.  Perhaps you want to start your own online business, get an increase in salary or you have an idea that could change the world. Whatever your reason is, it's never a bad time to learn web development.";

completeWebDev.description = completeWebDevDesc;
completeWebDev.descriptionHead = completeWebDevDescHead;

completeWebDev.addFeature("19 Hour Online Course");
completeWebDev.addFeature("No Prior Experience Required - Perfect for Beginners");
completeWebDev.addFeature("Become a Professional Web Designer/Developer");
completeWebDev.addFeature("Gain Valuable Job Skills");
completeWebDev.addFeature("Learn in Plain English - No Technical Documentation to Suffer Through");
completeWebDev.addFeature("Lifetime Access to All Course Material");

completeWebDev.addSuggestedCourse(new Course("Advanced CSS", ""));
completeWebDev.addSuggestedCourse(new Course("Advanced HTML", ""));
completeWebDev.addSuggestedCourse(new Course("Advanced JavaScript", ""));
completeWebDev.addSuggestedCourse(new Course("Advanced PHP Development", ""));

courseBundles.push(completeWebDev);


// Unity 3D Game Development and Design
var unityDev = new CourseBundle("Unity 3D Game Development and Design", "SKU 06-A0152",
  "$149", "<b>description</b>", "");

var unityDevDesc = "Whether you're completely new to game development or you have experience developing games with Unity 3D, this course is for you. Beginners can start with the basics of the Unity system with an explanation of how it works. This isn't an explanation of what each menu does one by one (that's boring), but a high level explanation of how Unity functions from the perspective of a first time game developer. You'll then take that knowledge and build your first real game in about an hour.";

unityDev.descriptionHead = unityDevDesc;

unityDev.addFeature("Over 150 lectures and 20+ hours of content!");
unityDev.addFeature("Learn the basics of Unity");
unityDev.addFeature("Build your first game in about an hour");
unityDev.addFeature("Learn coding in unity");
unityDev.addFeature("Build better games if you already know coding");
unityDev.addFeature("Understand level design");
unityDev.addFeature("Learn how to compile your games to console and mobile");
unityDev.addFeature("Learn 2D and 3D animation");

courseBundles.push(unityDev);


// Functions

function sortBundles(type) {
  switch (type) {
    case "alpha":
      courseBundles.sort(function(a,b) { return a.name.localeCompare(b.name); });
      break;
    case "reverse-alpha": 
      courseBundles.sort(function(a,b) { return a.name.localeCompare(b.name); });
      courseBundles.reverse();
      break;
    case "id":
      courseBundles.sort(function(a,b) { return a.id.localeCompare(b.id); });
      break;
    case "reverse-id":
      courseBundles.sort(function(a,b) { return a.id.localeCompare(b.id); });
      courseBundles.reverse();
      break;
    case "price":
      courseBundles.sort(function(a,b) { 
	if (a.price.length > b.price.length) {
	  return 1;
	} else if (a.price.length < b.price.length) {
	  return -1;
	} else {
	  return a.price.localeCompare(b.price); 
	}
      });
      break;
    case "reverse-price":
      courseBundles.sort(function(a,b) { 
	if (a.price.length > b.price.length) {
	  return 1;
	} else if (a.price.length < b.price.length) {
	  return -1;
	} else {
	  return a.price.localeCompare(b.price); 
	}
      });
      courseBundles.reverse();
      break;
  }

}
