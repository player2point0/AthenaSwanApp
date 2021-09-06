import ReactGA from "react-ga";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

// TODO for google analytics
// use react-ga https://github.com/react-ga/react-ga
// https://levelup.gitconnected.com/using-google-analytics-with-react-3d98d709399b

// Ask for and obtain end-user consent for all Google Analytics cookies on your website prior to their activation and operation.
// Control each Google Analytics cookie in order to only activate them after your users have given their explicit consent to them.
// Provide transparent information in your website’s cookie policy about the details of all Google Analytics cookies in operation – including their provider, technical details, duration and purpose. This is important as consent is only valid under the GDPR if it constitutes an informed choice on behalf of the users.
// Compile detailed information in your website’s privacy policy about all Google Analytics cookies on your domain, and what personal data your website processes in general.
// Turn on IP anonymization in your Google Analytics account and make sure that it uses pseudonymous identifiers.

//  ICO guidence
//ico.org.uk/for-organisations/guide-to-pecr/guidance-on-the-use-of-cookies-and-similar-technologies/how-do-we-comply-with-the-cookie-rules/#comply15

// We use necessary cookies to make our site work. We'd also like to set analytics cookies that help us make improvements by measuring how you use the site. These will be set only if you accept.
// We'd like to set Google Analytics cookies to help us improve our website by collecting and reporting information on how you use it. The cookies collect information in a way that does not directly identify anyone. For more information on how these cookies work please see our 'Cookies page'.

const GAController = () => {
	const setupGA = () => {
		ReactGA.initialize("UA-72245093-2");
		ReactGA.modalview("/");
	};

	if (getCookieConsentValue()) {
		setupGA();
	}

	return (
		<CookieConsent
			location="top"
			onAccept={setupGA}
			buttonText="Opt in"
			declineButtonText="Opt out"
			enableDeclineButton
		>
			This website uses anonymous Google Analytics cookies for reporting
			purposes.
		</CookieConsent>
	);
};

export default GAController;
