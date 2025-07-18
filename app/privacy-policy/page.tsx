import type { Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for services provided by Laurens Kuiper.',
}

export default function Privacy() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:col-span-2">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Privacy Policy
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              This statement applies to all products and services provided by Laurens Kuiper.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="max-w-2xl space-y-7 text-base text-zinc-600 dark:text-zinc-400">

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Introduction
              </h2>
              <p>Laurens Kuiper, with its registered office in Groot Heiligland 48, 2011 ES Haarlem, The Netherlands, is responsible for the processing of personal data as mentioned in this privacy statement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Personal data we process
              </h2>
              <p className="mb-4">Laurens Kuiper processes your personal data because you use our services and/or because you have provided it to us. Data which Laurens Kuiper may need from you or is necessary with regard to the objectives as listed below and that Laurens Kuiper in any case and at least processes include:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Initials and surname</li>
                <li>Gender</li>
                <li>Date of birth</li>
                <li>Company name</li>
                <li>Address details (consisting of street name, house number, ZIP code and country)</li>
                <li>Telephone number (mobile or fixed line)</li>
                <li>E-mail address</li>
                <li>Bank details</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Does Laurens Kuiper also process special personal data?
              </h2>
              <p>Special personal data concerns sensitive data, for example about your health or a criminal record, ethnical data or data concerning race. Laurens Kuiper does not process special personal data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Why we need data
              </h2>
              <p className="mb-4">As soon as you have entered into an agreement with Laurens Kuiper, we want to be of service to you in the best possible way. We will therefore use your data for the following objectives:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>To call or e-mail you if the performance of our services requires it.</li>
                <li>To inform you about changes in our services and products.</li>
                <li>In order to deliver products and services to you.</li>
                <li>If we are legally obliged thereto, like data we need for our tax declaration.</li>
                <li>Data can also be used for promotional or marketing purposes that relate to the type of services provision by Laurens Kuiper. For example, in order to inform you through our newsletter about a new activity of Laurens Kuiper. If you do not want to receive our newsletter, you can click on the button 'unsubscribe' at the end of the newsletter.</li>
              </ul>
              <p className="mt-4">We can solely use your data for any other objective than originally intended, if both objectives are closely related.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Which rules apply to the processing of personal data?
              </h2>
              <p>In the processing of personal data, Laurens Kuiper is bound by applicable laws and legislation and keeps up to date with relevant developments. In this meaning Laurens Kuiper retains the right to change the privacy statement in order to link the text to the latest state of affairs, as mentioned at the end of the privacy statement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                How long do we save data?
              </h2>
              <p>Laurens Kuiper will save your data no longer than strictly necessary and in order to put into practice the objectives for which your data was collected.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Sharing with others/provision of data to third parties
              </h2>
              <p>Laurens Kuiper does not sell your data to third parties and only provides it when absolutely necessary to perform our agreement with you or if it complies with a legal obligation. We enter into agreements with processing agents to ensure a similar level of security and confidentiality of your data.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Record of website visits (public section)
              </h2>
              <p>Laurens Kuiper only uses technical and functional cookies. A cookie is a tiny text file that is saved on your computer, tablet or smartphone when you visit our websites for the first time. The cookies we use are necessary for the technical processing of the websites and for your ease of use. They ensure that the websites function properly and remember your configuration preferences. You are able to deregister cookies by configuring your internet browser in such a way that cookies are no longer saved. In addition, you can delete all information that was earlier saved by changing your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                View, change or delete data
              </h2>
              <p>Naturally, you always have the possibility to view, correct or delete all personal data known to us. Hereto you can send a specified request to <a href="mailto:hello@flythecoop.com" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">hello@flythecoop.com</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Security
              </h2>
              <p>Laurens Kuiper places great store to the security and protection of your personal data. Laurens Kuiper has installed fitting technical and organisational measures to secure your personal data and protect it against loss, change, abuse or any (other) form of wrongful processing. Each person, who has access to personal data at Laurens Kuiper and/or processes it, is obliged to non-disclosure of this data, in as far as applicable laws and legislation do not stipulate differently. In case Laurens Kuiper uses third parties, Laurens Kuiper will set up agreements in relation to the necessary security measures within the scope of the protection of personal data. If the impression exists that your personal data is insufficiently protected or indications of abuse are present, please contact us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Your rights with regard to privacy
              </h2>
              <p>When you request a viewing, correction, placement or deletion of your personal data, Laurens Kuiper will inform you within five days. You can submit this request through an e-mail to <a href="mailto:hello@flythecoop.com" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">hello@flythecoop.com</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Questions
              </h2>
              <p>For questions or remarks about the processing of your personal data and this Privacy Statement, you can contact us through an e-mail to <a href="mailto:hello@flythecoop.com" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">hello@flythecoop.com</a>.</p>
            </section>

            <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-700/40">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                This privacy statement was drawn up on 01 January 2025.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Container>
  )
}
