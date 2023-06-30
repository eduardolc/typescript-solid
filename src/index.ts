
import SharedButtonTwitter from "./SharedButtonTwitter";
import SharedButtonFacebook from "./SharedButtonFacebook";
import SharedButtonLinkedIn from "./SharedButtonLinkedIn";
import SharedButtonPrint from "./SharedButtonPrint";
import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";
import DomEventHandler from "./DomEventHandler";
import MockEventHandler from "./MockEventHandler";


const url = "http://www.youtube.com/rodrigobranas";

const eventHandler: EventHandler = new DomEventHandler();

const twitter: AbstractShareButton = new SharedButtonTwitter(eventHandler, ".btn-twitter", url);
twitter.bind();
const facebook: AbstractShareButton = new SharedButtonFacebook(eventHandler, ".btn-facebook", url);
facebook.bind();
const linkedin: AbstractShareButton = new SharedButtonLinkedIn(eventHandler, ".btn-linkedin", url);
linkedin.bind();
const print: AbstractShareButton = new SharedButtonPrint(eventHandler, ".btn-print");
print.bind();
