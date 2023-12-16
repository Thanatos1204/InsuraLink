import React from 'react'
import Inavbar from '../components/Inavbar'
import Card from '../components/Card'


const insurancedashboard = () => {
  return (<>
  <Inavbar></Inavbar>
    <div className='flex flex-wrap justify-between '>      
      <Card imageURL="/lic-logo.png" cardTitle="LIC Term Insurance Plans" cardDescription="Provides pure life coverage without any savings component.
Offers financial protection to the family in case of the policyholder's demise during the policy term."></Card>
<Card imageURL="/lic-logo.png" cardTitle="LLIC Endowment Plans" cardDescription="Combines insurance coverage with savings.
Maturity benefits are paid out at the end of the policy term or on the death of the policyholder."></Card>
<Card imageURL="/lic-logo.png" cardTitle="LIC Money Back Plans" cardDescription="Periodic payouts are made during the policy term at specific intervals.
A percentage of the sum assured is paid as survival benefits, and the balance is paid at maturity."></Card>
<Card imageURL="/Marsh-McLennan-logo.png" cardTitle="Property Insurance" cardDescription="Provides coverage for physical property, including buildings, contents, equipment, and other assets, against perils such as fire, theft, and natural disasters."></Card>
<Card imageURL="/Marsh-McLennan-logo.png" cardTitle="Casualty Insurance" cardDescription="Provides pure life coverage without any savings component.
Offers financial protection to the family in case of the policyholder's demise during the policy term."></Card>
<Card imageURL="/Marsh-McLennan-logo.png" cardTitle="Professional Liability Insurance" cardDescription="Offers protection against claims of professional negligence or errors and omissions. This is crucial for professionals such as doctors, lawyers, and consultants."></Card>
    </div>
    </>
  )
}

export default insurancedashboard;
