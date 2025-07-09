import type { Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for services provided by Laurens Kuiper.',
}

export default function Terms() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:col-span-2">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Terms & Conditions
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              These terms and conditions govern the provision of services by Laurens Kuiper.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="max-w-2xl space-y-7 text-base text-zinc-600 dark:text-zinc-400">

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Definitions
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Fly The Coop:</strong> Fly The Coop, established in Haarlem, Chamber of Commerce no. 78749778.</li>
                <li><strong>Customer:</strong> the party which Fly The Coop has entered into an agreement with.</li>
                <li><strong>Parties:</strong> Fly The Coop and customer together.</li>
                <li><strong>Consumer:</strong> a customer who is an individual acting for private purposes.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Applicability
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>These terms and conditions will apply to all quotations, offers, activities, orders, agreements and deliveries of services or products by or on behalf of Fly The Coop.</li>
                <li>Parties can only deviate from these conditions if they have explicitly agreed upon in writing.</li>
                <li>The parties expressly exclude the applicability of supplementary and/or deviating general terms and conditions of the customer or of third parties.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Offers and quotations
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Offers and quotations from Fly The Coop are without engagement, unless expressly stated otherwise.</li>
                <li>An offer or quotation is valid for a maximum period of 2 weeks from its date, unless another acceptance period is stated in the offer or quotation.</li>
                <li>If the customer does not accept an offer or quotation within the applicable time frame, the offer or quotation will lapse.</li>
                <li>Offers and quotations do not apply to repeated orders, unless the parties have agreed upon this explicitly and in writing.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Acceptance
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Upon acceptance of a quotation or offer without engagement, Fly The Coop reserves the right to withdraw the quotation or offer within 3 days after receipt of the acceptance, without any obligations towards the customer.</li>
                <li>Verbal acceptance of the customer only commits Fly The Coop after the customer has confirmed this in writing (or electronically).</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Prices
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>All prices used by Fly The Coop are in euros, are inclusive of VAT and exclusive of any other costs such as administration costs, levies and travel-, shipping- or transport expenses, unless expressly stated otherwise or agreed otherwise.</li>
                <li>Fly The Coop is entitled to adjust all prices for its products or services, shown in its shop, on its website or otherwise, at any time.</li>
                <li>The price with regard to services is determined by Fly The Coop on the basis of the actual working hours.</li>
                <li>The price is calculated according to the usual hourly rates of Fly The Coop, valid for the period in which he carries out the work, unless a different hourly rate has been agreed.</li>
                <li>If the parties have agreed on a total price for a service provided by Fly The Coop, this is always a target price, unless the parties have explicitly agreed upon in writing on a fixed price, which cannot be deviated from.</li>
                <li>Fly The Coop is entitled to deviate up to 10% of the target price.</li>
                <li>If the target price exceeds 10%, Fly The Coop must let the customer know in due time why a higher price is justified.</li>
                <li>If the target price exceeds 10%, the customer has the right to cancel the part of the order that exceeds the target price by 10%.</li>
                <li>Fly The Coop has the right to adjust prices annually.</li>
                <li>Fly The Coop will communicate price adjustments to the customer prior to the moment the price increase becomes effective.</li>
                <li>The consumer has the right to terminate the contract with Fly The Coop if he does not agree with the price increase.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Payments and payment term
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Fly The Coop may, at the conclusion of the agreement, require a down payment of up to 50% of the agreed amount.</li>
                <li>The customer must have paid the full amount within 30 days, after delivery.</li>
                <li>Payment terms are considered as fatal payment terms. This means that if the customer has not paid the agreed amount at the latest on the last day of the payment term, he is legally in default, without Fly The Coop having to send the customer a reminder or to put him in default.</li>
                <li>Fly The Coop reserves the right to make a delivery conditional upon immediate payment or to require adequate security for the total amount of the services or products.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Consequences of late payment
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>If the customer does not pay within the agreed term, Fly The Coop is entitled to charge an interest per month for non-commercial transactions and an interest per month for commercial transactions from the day the customer is in default, whereby a part of a month is counted for a whole month.</li>
                <li>When the customer is in default, he is also due to extrajudicial collection costs and may be obliged to pay any compensation to Fly The Coop.</li>
                <li>The collection costs are calculated on the basis of the Reimbursement for extrajudicial collection costs.</li>
                <li>If the customer does not pay on time, Fly The Coop may suspend its obligations until the customer has met his payment obligation.</li>
                <li>In the event of liquidation, bankruptcy, attachment or suspension of payment on behalf of the customer, the claims of Fly The Coop on the customer are immediately due and payable.</li>
                <li>If the customer refuses to cooperate with the performance of the agreement by Fly The Coop, he is still obliged to pay the agreed price to Fly The Coop.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Right of withdrawal
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>A consumer may cancel an online purchase during a cooling-off period of 14 days without giving any reason, provided that:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>the service does not concern accommodation, travel, restaurant business, transport, catering assignment or form of leisure activity</li>
                    <li>the purchase does not concern an (assignment to) urgent repair</li>
                    <li>it does not concern a service that is fully performed with the consent of the customer within the 14 calendar days right of withdrawal period and the consumer has not renounced his right of withdrawal</li>
                  </ul>
                </li>
                <li>The cooling-off period of 14 days as referred to in paragraph 1 commences:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>as soon as the consumer has purchased a service for the first time</li>
                    <li>as soon as the consumer has confirmed the purchase of digital content via the internet</li>
                  </ul>
                </li>
                <li>The consumer can notify his right of withdrawal via hello@flythecoop.com, if desired by using the withdrawal form that can be downloaded via the website of Fly The Coop, <a href="https://www.laurenskuiper.com" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">https://www.laurenskuiper.com</a>.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Suspension of obligations by the customer
              </h2>
              <p>The customer waives the right to suspend the fulfillment of any obligation arising from this agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Settlement
              </h2>
              <p>The customer waives his right to settle any debt to Fly The Coop with any claim on Fly The Coop.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Insurance
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>The customer undertakes to insure and keep insured the following items adequately against fire, explosion and water damage as well as theft:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>goods delivered that are necessary for the execution of the underlying agreement</li>
                    <li>goods being property of Fly The Coop that are present at the premises of the customer</li>
                    <li>goods that have been delivered under retention of title</li>
                  </ul>
                </li>
                <li>At the first request of Fly The Coop, the customer provides the policy for these insurances for inspection.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Guarantee
              </h2>
              <p>When parties have entered into an agreement with services included, these services only contain best-effort obligations for Fly The Coop, not obligations of results.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Performance of the agreement
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Fly The Coop executes the agreement to the best of its knowledge and ability and in accordance with the requirements of good workmanship.</li>
                <li>Fly The Coop has the right to have the agreed services (partially) performed by third parties.</li>
                <li>The execution of the agreement takes place in mutual consultation and after written agreement and payment of the possibly agreed advance by the customer.</li>
                <li>It is the responsibility of the customer that Fly The Coop can start the implementation of the agreement on time.</li>
                <li>If the customer has not ensured that Fly The Coop can start the implementation of the agreement in time, the resulting additional costs and/or extra hours will be charged to the customer.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Duty to inform by the customer
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>The customer shall make available to Fly The Coop all information, data and documents relevant to the correct execution of the agreement to in time and in the desired format and manner.</li>
                <li>The customer guarantees the correctness, completeness and reliability of the information, data and documents made available, even if they originate from third parties, unless otherwise ensuing from the nature of the agreement.</li>
                <li>If and insofar as the customer requests this, Fly The Coop will return the relevant documents.</li>
                <li>If the customer does not timely and properly provide the information, data or documents reasonably required by Fly The Coop and the execution of the agreement is delayed because of this, the resulting additional costs and extra hours will be charged to the customer.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Duration of the service agreement
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>The agreement between Fly The Coop and the customer is entered into for the duration of 12 months, unless it results otherwise from the nature of the agreement or if the parties have expressly agreed otherwise in writing.</li>
                <li>If a fixed-term contract has been entered into, it will be tacitly converted into an open-ended contract at the end of the term, unless 1 of the parties terminates the contract with due observance of a notice period of 2 month(s), or if a consumer terminates the agreement with due observance of a notice period of 1 month causing the agreement to end at the end of the fixed term.</li>
                <li>If the parties have agreed upon a term for the completion of certain activities, this is never a strict deadline, unless specified explicitly otherwise in writing. If this term is exceeded, the customer must give Fly The Coop a written reasonable term to terminate the activities, before it may either terminate the contract or claim damages.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Intellectual property
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Fly The Coop retains all intellectual property rights (including copyright, patent rights, trademark rights, design and design rights, etc.) on all designs, drawings, writings, data carriers or other information, quotations, images, sketches, models, scale models, etc., unless parties have agreed otherwise in writing.</li>
                <li>The customer may not copy or have copied the intellectual property rights without prior written permission from Fly The Coop, nor show them to third parties and / or make them available or use them in any other way.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Confidentiality
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>The client keeps any information he receives (in whatever form) from Fly The Coop confidential.</li>
                <li>The same applies to all other information concerning Fly The Coop of which he knows or can reasonably suspect that it is secret or confidential, or of which it can expect that its disclosure may cause damage to Fly The Coop.</li>
                <li>The customer takes all necessary measures to ensure that he keeps the information referred to in paragraphs 1 and 2 secret.</li>
                <li>The obligation of secrecy described in this article does not apply to information:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>which was already made public before the customer heard this information or which later became public without being the result of a violation of the customer's duty to confidentiality</li>
                    <li>which is made public by the customer due to a legal obligation</li>
                  </ul>
                </li>
                <li>The confidentiality obligation described in this article applies for the duration of the underlying agreement and for a period of 3 years after the end thereof.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Penalties
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>If the customer violates the articles of these general terms and conditions about secrecy or intellectual property, then he forfeits on behalf of Fly The Coop an immediately due and payable fine of € 1.000 if the customer is a consumer and € 5.000 if the customer is a company, for each violation and in addition an amount of 5% of the aforementioned amount for each day that this violation continues.</li>
                <li>No actual damage, prior notice of default or legal proceedings are required in forfeiting the fine referred to in the first paragraph of this article.</li>
                <li>The forfeiture of the fine referred to in the first paragraph of this article shall not affect the other rights of Fly The Coop including its right to claim compensation in addition to the fine.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Indemnity
              </h2>
              <p>The customer indemnifies Fly The Coop against all third-party claims that are related to the products and/or services supplied by Fly The Coop.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Complaints
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>The customer must examine a product or service provided by Fly The Coop as soon as possible for possible shortcomings.</li>
                <li>If a delivered product or service does not comply with what the customer could reasonably expect from the agreement, the customer must inform Fly The Coop of this as soon as possible, but in any case within 1 month after the discovery of the shortcomings.</li>
                <li>Consumers must inform Fly The Coop of this within two months after detection of the shortcomings.</li>
                <li>The customer gives a detailed description as possible of the shortcomings, so that Fly The Coop is able to respond adequately.</li>
                <li>The customer must demonstrate that the complaint relates to an agreement between the parties.</li>
                <li>If a complaint relates to ongoing work, this can in any case not lead to Fly The Coop being forced to perform other work than has been agreed.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Giving notice
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>The customer must provide any notice of default to Fly The Coop in writing.</li>
                <li>It is the responsibility of the customer that a notice of default actually reaches Fly The Coop (in time).</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Joint and several Client liabilities
              </h2>
              <p>If Fly The Coop enters into an agreement with several customers, each of them shall be jointly and severally liable for the full amounts due to Fly The Coop under that agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Liability of Fly The Coop
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Fly The Coop is only liable for any damage the customer suffers if and insofar as this damage is caused by intent or gross negligence.</li>
                <li>If Fly The Coop is liable for any damage, it is only liable for direct damages that results from or is related to the execution of an agreement.</li>
                <li>Fly The Coop is never liable for indirect damages, such as consequential loss, lost profit, lost savings or damage to third parties.</li>
                <li>If Fly The Coop is liable, its liability is limited to the amount paid by a closed (professional) liability insurance and in the absence of (full) payment by an insurance company of the damages the amount of the liability is limited to the (part of the) invoice to which the liability relates.</li>
                <li>All images, photos, colors, drawings, descriptions on the website or in a catalog are only indicative and are only approximate and cannot lead to any compensation and/or (partial) dissolution of the agreement and/or suspension of any obligation.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Expiry period
              </h2>
              <p>Every right of the customer to compensation from Fly The Coop shall, in any case, expire within 12 months after the event from which the liability arises directly or indirectly. This does not exclude the provisions in article 6:89 Dutch Civil Code.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Dissolution
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>The customer has the right to dissolve the agreement if Fly The Coop imputably fails in the fulfillment of his obligations, unless this shortcoming does not justify termination due to its special nature or because it is of minor significance.</li>
                <li>If the fulfillment of the obligations by Fly The Coop is not permanent or temporarily impossible, dissolution can only take place after Fly The Coop is in default.</li>
                <li>Fly The Coop has the right to dissolve the agreement with the customer, if the customer does not fully or timely fulfill his obligations under the agreement, or if circumstances give Fly The Coop good grounds to fear that the customer will not be able to fulfill his obligations properly.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Force majeure
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>In addition to the provisions of article 6:75 Dutch Civil Code, a shortcoming of Fly The Coop in the fulfillment of any obligation to the customer cannot be attributed to Fly The Coop in any situation independent of the will of Fly The Coop, when the fulfillment of its obligations towards the customer is prevented in whole or in part or when the fulfillment of its obligations cannot reasonably be required from Fly The Coop.</li>
                <li>The force majeure situation referred to in paragraph 1 is also applicable - but not limited to: state of emergency (such as civil war, insurrection, riots, natural disasters, etc.); defaults and force majeure of suppliers, deliverymen or other third parties; unexpected disturbances of power, electricity, internet, computer or telecoms; computer viruses, strikes, government measures, unforeseen transport problems, bad weather conditions and work stoppages.</li>
                <li>If a situation of force majeure arises as a result of which Fly The Coop cannot fulfill one or more obligations towards the customer, these obligations will be suspended until Fly The Coop can comply with it.</li>
                <li>From the moment that a force majeure situation has lasted at least 30 calendar days, both parties may dissolve the agreement in writing in whole or in part.</li>
                <li>Fly The Coop does not owe any (damage) compensation in a situation of force majeure, even if it has obtained any advantages as a result of the force majeure situation.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Modification of the agreement
              </h2>
              <p>If, after the conclusion of the agreement and before its implementation, it appears necessary to change or supplement its contents, the parties shall timely and in mutual consultation adjust the agreement accordingly.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Changes in the general terms and conditions
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Fly The Coop is entitled to amend or supplement these general terms and conditions.</li>
                <li>Changes of minor importance can be made at any time.</li>
                <li>Major changes in content will be discussed by Fly The Coop with the customer in advance as much as possible.</li>
                <li>Consumers are entitled to cancel the agreement in the event of a substantial change to the general terms and conditions.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Transfer of rights
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>The customer cannot transfer its rights deferring from an agreement with Fly The Coop to third parties without the prior written consent of Fly The Coop.</li>
                <li>This provision applies as a clause with a property law effect as referred to in Section 3:83 (2) Dutch Civil Code.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Consequences of nullity or annullability
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>If one or more provisions of these general terms and conditions prove null or annullable, this will not affect the other provisions of these terms and conditions.</li>
                <li>A provision that is null or annullable shall, in that case, be replaced by a provision that comes closest to what Fly The Coop had in mind when drafting the conditions on that issue.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4">
                Applicable law and competent court
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Dutch law is exclusively applicable to all agreements between the parties.</li>
                <li>The Dutch court in the district where Fly The Coop is established is exclusively competent in case of any disputes between parties, unless the law prescribes otherwise.</li>
              </ol>
            </section>

            <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-700/40">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Drawn up on 01 January 2025.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Container>
  )
}
