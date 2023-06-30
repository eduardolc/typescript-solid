import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class SharedButtonTwitter extends AbstractLinkShareButton {

    constructor(eventHandler: EventHandler, clazz: string, url: string) {
        super(eventHandler, clazz, url);
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`;
    }
}