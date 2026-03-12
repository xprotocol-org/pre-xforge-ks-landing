import type { Metadata } from "next";
import { SITE_URL } from "@/lib/utils";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for XForge Phone.",
    alternates: {
        canonical: `${SITE_URL}/privacy-policy`,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-xforge-black text-white">
            <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-xforge-gray hover:text-white transition-colors duration-200 mb-10"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M10 12L6 8L10 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Back to Home
                </Link>

                <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-2">
                    Privacy Policy
                </h1>

                <p className="text-sm text-xforge-gray mb-8">
                    <em>Last Updated: February 27, 2026</em>
                </p>

                <div className="text-[15px] leading-relaxed text-[#ccc] space-y-6">
                    {/* Overview */}
                    <h2 className="text-xl font-semibold text-white">Overview</h2>
                    <p>
                        XForge (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is committed to protecting the privacy of the personal information we collect and use. We will collect personal information from time to time in order to better deliver our products and services (collectively &ldquo;Services&rdquo;). To learn more about the personal information we collect and how we use and protect that personal information, please read on.
                    </p>
                    <p>
                        Please note, this Privacy Policy may be amended from time to time to reflect changes in technology, the law, or for any other reason we determine is necessary or appropriate. Any updates to this Privacy Policy will be posted here. Please refer to the &ldquo;Last Updated&rdquo; date at the top of the document to familiarize yourself with the most recent version of this Privacy Policy.
                    </p>

                    {/* Personal Information Collected on Users of Services */}
                    <h2 className="text-xl font-semibold text-white">Personal Information Collected on Users of Services</h2>
                    <p>
                        By providing personal information to us and by requesting us to provide you with the Services, you voluntarily consent to the collection, use and disclosure of such personal information as specified in this Privacy Policy. Without limiting the foregoing, we may on occasion ask you to consent when we collect, use, or disclose your personal information in specific circumstances. Sometimes your consent will be implied through your conduct with us if the purpose of the collection, and our expected use or disclosure of your information, is or should be obvious and you voluntarily provide the information. Please be assured, however, that all collection, use and disclosure of personal information will be in accordance with this Privacy Policy.
                    </p>

                    {/* When We Collect User Information */}
                    <h2 className="text-xl font-semibold text-white">When We Collect User Information</h2>
                    <p>
                        Much of the personal information is collected when you interact with our site or request our Services, specifically:
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                        <li>when you register on our site or request our Services (examples: name, email address, address, payment information)</li>
                        <li>subscribe to our newsletter (example: email address)</li>
                        <li>fill out a form (example: name, email address, address)</li>
                        <li>otherwise enter personal information on our site or through or Services</li>
                    </ol>
                    <p>
                        We also collect analytical information regarding your usage of the Services, which may include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>IP address</li>
                        <li>preferences</li>
                        <li>web pages visited prior to coming to our website</li>
                        <li>information about your browser, network or device (such as browser type and version, operating system, internet service provider, preference settings, unique device IDs and language and other regional setting)</li>
                        <li>information about how you interact with the Services (such as timestamps, clicks, scrolling, browsing times, searches, transactions, referral pages, load times, and problems you may encounter, such as loading errors)</li>
                    </ul>
                    <p>
                        We also collect information automatically when you use our Services, including via technologies like cookies. For more information about cookies and how they are used, see the cookies section below.
                    </p>
                    <p>
                        We also receive information from Third-Party Services (like from our payment processor when you submit a payment).
                    </p>

                    {/* Use and Purpose of Information Collected */}
                    <h2 className="text-xl font-semibold text-white">Use and Purpose of Information Collected</h2>
                    <p>
                        We may use the personal information that we collect for the following purposes:
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                        <li>to provide the Services to our Users and to improve the quality of the Services</li>
                        <li>to provide our Users with newsletters, RSS feeds, or other communications or services which our Users have signed up for or otherwise agreed to receive</li>
                        <li>to provide information to our Users so that they may use the Services more effectively</li>
                        <li>to create, manage and control Users&apos; account information, and to verify access rights to Services and software</li>
                        <li>to bill Users&apos; account</li>
                        <li>to communicate with Users for the purpose of informing them of changes or additions to the Services, or of the availability of any Service we provide</li>
                        <li>to assess service levels, monitor traffic patterns and gauge popularity of different service options</li>
                        <li>to communicate with Users about products or services that may be of interest to them, either from us or third parties</li>
                        <li>to enforce this Privacy Policy</li>
                        <li>to respond to claims of any violation of our rights or those of any third parties</li>
                        <li>to cooperate with legal, criminal or regulatory investigations or proceedings</li>
                        <li>to respond to Users&apos; requests for customer service</li>
                        <li>to protect the rights, property or personal safety of our Users, the End Users, us and the public; and as required or authorized by law</li>
                        <li>Providing advertising and marketing services to the User or the end users of the User&apos;s website</li>
                    </ol>
                    <p>
                        Users have the option to not receive marketing emails from us. Within all marketing email communications is an opt-out function, and we will cease communicating with you upon exercising the opt-out function. Please note that Users may not &ldquo;opt-out&rdquo; of certain communication announcements related to the Services, including information specific to User account (such as confirmation emails), planned Services suspensions and outages, though we will attempt to minimize this type of communication to Users.
                    </p>

                    {/* Information Sharing */}
                    <h2 className="text-xl font-semibold text-white">Information Sharing</h2>
                    <p>
                        We may share the personal information we have collected with third parties in accordance with your instructions or as necessary to provide our Users with a specific Service or otherwise in accordance with this Privacy Policy and any Applicable Data Privacy Laws. We may disclose your personal and non-personal information to our agents, contractors and service providers who are engaged to perform functions on our behalf (such as processing of payments, provision of data storage, hosting of our website, marketing of our products and services, conducting audits, and performing web analytics). These third-party contractors and service providers (i) shall be permitted to obtain only the personal information they need to provide the service, and (ii) must protect personal information to the same extent as Us, including not using it for any improper purpose.
                    </p>
                    <p>
                        We may also share your personal information to third parties when we believe, in good faith and in our sole discretion, that such disclosure is reasonably necessary to:
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                        <li>conduct a legitimate business purpose, including advertising and marketing to you or end users</li>
                        <li>enforce or apply our Terms of Service, including investigation of potential violations thereof</li>
                        <li>comply with legal or regulatory requirements or cooperate with a law enforcement or regulatory investigation</li>
                        <li>protect the rights, property, or safety of Us, our Users or other third parties</li>
                        <li>prevent a crime or protect national security</li>
                        <li>detect, prevent or otherwise address fraud, security or technical issues</li>
                    </ol>
                    <p>
                        The information we collect may also be disclosed as part of any merger, acquisition, or sale of Us and/or its assets, as well as in the unlikely event of insolvency, bankruptcy, or receivership, in which case personal information would be transferred as one of the business assets of the company.
                    </p>
                    <p>
                        We may also disclose non-personally identifiable information on an aggregated, anonymous basis (see &ldquo;Aggregated Data&rdquo; section below) to our business partners, merchants, advertisers, investors, potential buyers and other third parties if we deem such disclosure, in our sole discretion, to have sound business reasons or justifications.
                    </p>

                    {/* Aggregated Data */}
                    <h2 className="text-xl font-semibold text-white">Aggregated Data</h2>
                    <p>
                        We may also use your personal information and information about our Users&apos; site&apos;s activity to generate Aggregated Data for internal use and for sharing with others. &ldquo;Aggregated Data&rdquo; means records which have been stripped of information potentially identifying users of Sites, and which have been manipulated or combined to provide generalized, anonymous information. Aggregated Data will not disclose you as the source or subject of the information.
                    </p>

                    {/* Cookies and Other Information-Gathering Technologies */}
                    <h2 className="text-xl font-semibold text-white">Cookies and Other Information-Gathering Technologies</h2>
                    <p>
                        We use cookies to track User activity. Cookies are small amounts of data that are transferred to your web browser by a web server and are stored on your computer&apos;s hard drive. We use cookies to track which page variant a visitor has seen, to track if a visitor has clicked on a page variant, to monitor traffic patterns and to gauge popularity of service options. We will use this information to deliver relevant content and services to our Users. This also allows us to make sure that visitors see the landing page they expect to see if they return to the same web URL, and it allows us to tell you how many people click on our Users&apos; landing pages.
                    </p>
                    <p>
                        Most browsers will allow you to decline the use of and to delete cookies already stored on your computer. Please refer to the &ldquo;help&rdquo; portion of the toolbar on your browser if you wish to disable or delete cookies. Please note, however, that if you choose to set your browser to decline, delete or disable cookies, you may not be able to access certain areas or features of our Sites.
                    </p>
                    <p>
                        In addition to cookies, we or our service providers may use web beacons, pixels and similar technologies on our Sites and in email messages or newsletters. These tiny electronic images can be used to assist us in determining how many users have visited certain pages or opened messages or newsletters.
                    </p>

                    {/* Your Rights */}
                    <h2 className="text-xl font-semibold text-white">Your Rights</h2>
                    <p>
                        If you are a resident of a state governed by Applicable Data Privacy Laws you have the right to access, correct or delete personal information collected on you. You also have the right to opt out of having your personal information shared or sold and to limit the use and disclosure of any sensitive personal information.
                    </p>
                    <p>
                        You may exercise your rights by contacting us at{" "}
                        <a
                            href="mailto:design@geniyes.com"
                            className="text-xforge-gold hover:underline"
                        >
                            design@geniyes.com
                        </a>
                        .
                    </p>
                    <p>
                        You may also use the email above to request information about whether your personal information has been shared or sold to any third parties for the third parties&apos; direct marketing purposes. If such a request is made, we will provide a list of all third parties to whom personal information was disclosed in the preceding calendar year, as well as a list of the categories of personal information that was disclosed. Please note that, for technical reasons, there may be a delay in processing this request and that we are only required to respond to one request per customer each year, and we are not required to respond to requests made by means other than through the provided email address. Please note that not all information is covered by the Applicable Data Privacy Law requirements and only covered information will be included in our response.
                    </p>
                    <p>
                        You also have the right not to be discriminated against for exercising your privacy rights. We will not discriminate against you should you choose to exercise any of your rights as described above.
                    </p>

                    {/* Visiting Our Sites from Outside the United States */}
                    <h2 className="text-xl font-semibold text-white">Visiting Our Sites from Outside the United States</h2>
                    <p>
                        Our site is operated and hosted in the United States. If you are visiting the sites from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located, and our central database is operated. The data protection and privacy laws of the United States may not be as comprehensive as those in your country. By using the site and the services available on thereon, which are provided exclusively from the United States, you hereby consent to the transfer of your information to the United States and its collection, storage, sharing and use as described in this Privacy Policy. You further agree that all transactions relating to the site and our Services shall be deemed to have occurred in the United States.
                    </p>

                    {/* We Use Google Ads */}
                    <h2 className="text-xl font-semibold text-white">We Use Google Ads</h2>
                    <p>
                        This website uses the Google Ads remarketing service to advertise on third-party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven&apos;t completed a task on our site, for example using the contact form to make an inquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone&apos;s past visits to our website. Of course, any data collected will be used in accordance with our own privacy policy and Google&apos;s privacy policy.
                    </p>
                    <p>
                        You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.
                    </p>

                    {/* Links */}
                    <h2 className="text-xl font-semibold text-white">Links</h2>
                    <p>
                        Our Site may contain links to other websites. We are not responsible for the privacy or security practices or the content of such other websites. We encourage you to read the privacy policy of linked sites that you visit, because their privacy policies and practices may differ from ours.
                    </p>

                    {/* Children's Privacy */}
                    <h2 className="text-xl font-semibold text-white">Children&apos;s Privacy</h2>
                    <p>
                        Our site is not intended for children under sixteen (16) years of age. We do not knowingly provide the Sites or the Services to, and will not knowingly collect personal information from, children under the age of 16 or anyone else under the age of consent. If we learn that we have collected or received personal information from a child under the age of 16 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 16, please contact us through our support page.
                    </p>

                    {/* Security */}
                    <h2 className="text-xl font-semibold text-white">Security</h2>
                    <p>
                        We will strive to prevent unauthorized access to your personal information; however, no data transmission over the Internet, by wireless device or over the air is guaranteed to be 100% secure. We will continue to enhance security procedures as new technologies and procedures become available.
                    </p>
                    <p>
                        We strongly recommend that you do not disclose your password to anyone. If you forget your password, we will ask you for your ID and send you an email containing a link that will allow you to reset your password.
                    </p>
                    <p>
                        Please remember that you control what personal information you provide while using the Services and Sites. Ultimately, you are responsible for maintaining the secrecy of your identification, passwords and/or any personal information in your possession for the use of the Services and Sites. Always be careful and responsible regarding your personal information. We are not responsible for, and cannot control, the use by others of any information which you provide to them, and you should use caution in selecting the personal information you provide to others through the Services and Sites.
                    </p>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center text-xforge-gray text-xs">
                    © 2026 XForge. All rights reserved.
                </div>
            </div>
        </main>
    );
}
