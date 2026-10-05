import heroEntrance from "@/assets/madhubhan-hero-entrance.jpg";
import { Shield, Lock, FileText, CheckCircle, Mail, Globe } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Banner with Hero Section Image */}
      <section className="relative w-full h-[38vh] min-h-[16rem] max-h-[26rem] flex items-center justify-center overflow-hidden bg-[#111] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={heroEntrance}
            alt="Madhubhan Resort & Spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-semibold mb-2">
            Madhubhan Resort &amp; Spa
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white font-normal tracking-wide drop-shadow-md">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="bg-[#fbf9f5] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-200/80">
        <div className="max-w-4xl mx-auto bg-white border border-stone-200/90 shadow-sm p-6 sm:p-10 md:p-14 rounded-sm text-stone-800">
          <div className="border-b border-stone-200 pb-6 mb-10">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#a37c4c] font-semibold mb-2">
              <Shield className="w-4 h-4" />
              <span>Madhubhan Resort &amp; Spa</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] font-normal">
              Privacy Policy
            </h1>
            <p className="text-xs text-stone-500 mt-2 font-mono">
              Last Updated &amp; Effective: {new Date().getFullYear()}
            </p>
          </div>

          <div className="space-y-10 text-sm sm:text-[0.95rem] leading-[1.8] text-stone-700 font-light">
            {/* Information Collection and Use */}
            <article className="space-y-3">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#a37c4c]" />
                Information Collection and Use
              </h2>
              <p>
                Madhubhan Resort &amp; Spa is the sole owner of the information collected on this site. We will not sell, share, or rent this information to others in ways different from what is disclosed in this statement. Madhubhan Resort &amp; Spa collects information from our users at several different points on our website.
              </p>
            </article>

            {/* Registration */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Registration
              </h2>
              <p>
                During registration a user is required to give their contact information (such as name and email address). This information is used to contact the user about the services on our site for which they have expressed interest.
              </p>
            </article>

            {/* Order */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Order
              </h2>
              <p>
                We request information from the user on our order form. Here a user must provide contact information (like name and shipping address) and financial information (like credit card number, expiration date). This information is used for billing purposes and to fill customer&apos;s orders. If we have trouble processing an order, this contact information is used to get in touch with the user.
              </p>
            </article>

            {/* Cookies */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Cookies
              </h2>
              <p>
                A cookie is a piece of data stored on the user&apos;s hard drive containing information about the user. Usage of a cookie is in no way linked to any personally identifiable information while on our site. Once the user closes their browser, the cookie simply terminates. For instance, by setting a cookie on our site, the user would not have to log in a password more than once, thereby saving time while on our site. If a user rejects the cookie, they may still use our site. Cookies can also enable us to track and target the interests of our users to enhance the experience on our site.
              </p>
            </article>

            {/* Log Files */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Log Files
              </h2>
              <p>
                We use IP addresses to analyze trends, administer the site, track user&apos;s movement, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information.
              </p>
            </article>

            {/* Links */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Links
              </h2>
              <p>
                This web site contains links to other sites. Please be aware that we Madhubhan Resort &amp; Spa are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of each and every web site that collects personally identifiable information. This privacy statement applies solely to information collected by this Web site.
              </p>
            </article>

            {/* Newsletter */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Newsletter
              </h2>
              <p>
                If a user wishes to subscribe to our newsletter, we ask for contact information such as name and email address.
              </p>
            </article>

            {/* Surveys */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Surveys
              </h2>
              <p>
                From time-to-time our site requests information from users via surveys. Participation in these surveys is completely voluntary and the user therefore has a choice whether or not to disclose this information. Information requested may include contact information (such as name and shipping address), and demographic information (such as zip code, age level). Survey information will be used for purposes of monitoring or improving the use and satisfaction of this site.
              </p>
            </article>

            {/* Tell-A-Friend */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Tell-A-Friend
              </h2>
              <p>
                If a user elects to use our referral service for informing a friend about our site, we ask them for the friend&apos;s name and email address. Madhubhan Resort &amp; Spa will automatically send the friend a one-time email inviting them to visit the site.
              </p>
              <p>
                Madhubhan Resort &amp; Spa stores this information for the sole purpose of sending this one-time email. The friend may contact Madhubhan Resort &amp; Spa at{" "}
                <a
                  href="https://madhubhanresortandspa.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#a37c4c] underline underline-offset-4 hover:text-[#8b6537]"
                >
                  https://madhubhanresortandspa.com/
                </a>{" "}
                to request the removal of this information from their database.
              </p>
            </article>

            {/* Security */}
            <article className="space-y-4 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal flex items-center gap-2.5">
                <Lock className="w-5 h-5 text-[#a37c4c]" />
                Security
              </h2>
              <p>
                This website takes every precaution to protect our users&apos; information. When users submit sensitive information via the website, your information is protected both online and off-line.
              </p>
              <p>
                When our registration/order form asks users to enter sensitive information (such as credit card number and/or social security number), that information is encrypted and is protected with the best encryption software in the industry - SSL. While on a secure page, such as our order form, the lock icon on the bottom of Web browsers such as Netscape Navigator and Microsoft Internet Explorer becomes locked, as opposed to un-locked, or open, when you are just &lsquo;surfing&rsquo;.
              </p>
              <p>
                While we use SSL encryption to protect sensitive information online, we also do everything in our power to protect user-information off-line. All of our users&apos; information, not just the sensitive information mentioned above, is restricted in our offices. Only employees who need the information to perform a specific job (for example, our billing clerk or a customer service representative) are granted access to personally identifiable information. Our employees must use password-protected screen-savers when they leave their desk.
              </p>
              <p>
                When they return, they must re-enter their password to re-gain access to your information. Furthermore, ALL employees are kept up-to-date on our security and privacy practices. Every quarter, as well as any time new policies are added, our employees are notified and/or reminded about the importance we place on privacy, and what they can do to ensure our customers&apos; information is protected. Finally, the servers that we store personally identifiable information on are kept in a secure environment, behind a locked cage.
              </p>
              <p className="bg-stone-50 p-4 border-l-2 border-[#a37c4c] text-xs sm:text-sm">
                If you have any questions about the security at our website, you can send an email to{" "}
                <a
                  href="mailto:gm@madhubhan.com"
                  className="text-[#a37c4c] font-semibold underline underline-offset-4"
                >
                  gm@madhubhan.com
                </a>
              </p>
            </article>

            {/* Correction/Updating Personal Information */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Correction / Updating Personal Information
              </h2>
              <p>
                If a user&apos;s personally identifiable information changes (such as your zip code), or if a user no longer desires our service, we will endeavor to provide a way to correct, update or remove that user&apos;s personal data provided to us. This can usually be done at the member information page or by emailing our Customer Support. [Some sites may also provide telephone or postal mail options for updating or correcting personal information].
              </p>
            </article>

            {/* Choice / Opt-out */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Choice / Opt-out
              </h2>
              <p>
                Users who no longer wish to receive our newsletter or promotional materials from our partners may opt-out of receiving these communications by replying to unsubscribe in the subject line in the email or email us at{" "}
                <a
                  href="mailto:marketing@madhubhan.com"
                  className="text-[#a37c4c] underline underline-offset-4 font-semibold"
                >
                  marketing@madhubhan.com
                </a>
              </p>
              <p className="text-xs text-stone-500">
                [Some sites are able to offer opt-out mechanisms on member information pages and also supply a telephone or postal option as a way to opt-out.]
              </p>
            </article>

            {/* Notification of Changes */}
            <article className="space-y-3 border-t border-stone-100 pt-8">
              <h2 className="font-serif text-2xl text-[#1a1a1a] font-normal">
                Notification of Changes
              </h2>
              <p>
                If we decide to change our privacy policy, we will post those changes on our Homepage so our users are always aware of what information we collect, how we use it, and under circumstances, if any, we disclose it. If at any point we decide to use personally identifiable information in a manner different from that stated at the time it was collected, we will notify users by way of an email. Users will have a choice as to whether or not we use their information in this different manner. We will use information in accordance with the privacy policy under which the information was collected.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
