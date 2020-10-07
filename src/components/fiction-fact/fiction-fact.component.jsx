import React from 'react';

import './fiction-fact.styles.scss';
const factData = [
  {
    fiction:
      'This facility was developed in response to the Covid-19  epidemic.',
    fact:
      'Plans for the Jericho facility began in 2019, months before the Covid-19 epidemic.  County Executive Curran and others are only now claiming a Covid emergency as an  excuse for ignoring public hearing requirements, for violating the construction  permitting process and for evading local zoning laws.',
  },
  {
    fiction:
      'A transitional facility is a temporary facility only needed during the Covid-19 epidemic.',
    fact:
      'The Jericho facility is meant to be a permanent facility for the homeless that will  remain open for years after the end of the epidemic.',
  },
  {
    fiction: 'This will only be a facility for families.',
    fact:
      "There is no commitment that this will remain a transitional facility for families. If the  owner decides that the property is better suited for a different homeless population (adults, addicts) or would be more lucrative as a different type of facility (emergency,  halfway house), this change could be made unilaterally. Today's promises are not binding.",
  },
  {
    fiction:
      'This facility will take all of the homeless out of the  neighboring motels.',
    fact:
      'Many of the residents in the neighboring motels are single adults (including several  registered sex offenders) who are ineligible to move into the new facility. There has  heen NO commitment that the families/students in the current motels will be  relocated to the proposed facility. Similarly, if these families are relocated, there has  been NO comment on whether additional families will be moved into these  neighboring motels.',
  },
  {
    fiction: "This facility will not affect Jericho's quality of life",
    fact:
      'The new owner of the Jericho property is involved in other homeless facilities, many  of which have garnered tremendous negative press, accumulated large financial fines  and elicited long lists of neighbor complaints for the severe issues created by the  mismanagement and poor supervision of those facilities.',
  },
  {
    fiction: 'This is a not-for-profit project.',
    fact:
      'The new property owner is a private FOR-PROFIT corporation, 120 West End LLC. It  purchased the 80-room facility in July 2020 for $13 million with the expectation of  moving families into the facility in August. At the contracted room rate for this  facility ($222.89 per room per night), the property owner and operator will receive  up to $6.5 MILLION PER YEAR in taxpayer money.',
  },
  {
    fiction:
      'The facility operator Community Housing Innovations (CHI)  has experience managing transitional shelters.',
    fact:
      'Although CHI currently manages 29 properties, the Jericho facility is meaningfully  larger and more complex than the typical CHI project and will house over 10% of the  individuals served by CHI.',
  },
  {
    fiction: 'This is a good location for a family shelter.',
    fact:
      'The facility is located at an extremely busy 5- way intersection with very limited  access to public transportation.',
  },
  {
    fiction:
      'The facility is to help good families with clean backgrounds get back on their feet.',
    fact:
      'This 80-room facility will be equipped with 100 video cameras and operate with 24  hour security. Residents will have nightly curfews and undergo a bag search when  entering the facility. CHI Development of Individual Living Plans to assist clients with reducing barriers to  independent housing which can include: Crisis Intervention, Mental Health Referrals,  Substance abuse referrals. Families with mental problems, anger control problems, critical emotional control problems (e.g. drug overdose), substance abuse problems  (such as alcohol and illicit drug addicts) can be moved into the proposed facility.',
  },
  {
    fiction:
      'There are 19 students entering the Jericho school district  because of this facility, 3 -10 of which are already in the  district (both numbers have been quoted).',
    fact:
      'The County was very careful to qualify this statement by saying "at this moment."  Given the operator\'s expected turnover in residents (every 6-9 months), it is  impossible to predict how many students will enroll in Jericho from year to year. With 80 families this facility can be expected to house more than 150 children. While  some of these children may choose to be bused to their previous school districts, it is  not unreasonable to expect that a very substantial portion of these students will  elect to attend the more convenient, top-rated Jericho schools. The President of the  Jericho Board of Education has publicly stated that absorbing up to 100 additional  students into a District that currently educates 3,000 would be a challenge.',
  },
  {
    fiction:
      'Once students move out of this facility, they cannot remain in  Jericho Schools.',
    fact:
      'Students relocating outside the Jericho School District are permitted to remain in  Jericho Schools if they move into alternate temporary housing or if they are entering a graduation year (5th, 8th or 12th grades).',
  },
  {
    fiction: 'This facility will hove no cost to the Jericho School District.',
    fact:
      "While the District does receive a fixed-dollar reimbursement for each homeless student that enrolls in the Jericho Schools, the extent to which this fixed-rate payment covers the full financial cost for these students is questionable. In addition, the community has been told the population in this facility will turn over every 6-9  months creating tremendous dislocation and uncertainty on enrollment and taking countless hours of administrators' and educators' time and focus for which there is  no reimbursement.",
  },
  {
    fiction: 'Jericho residents are selfish for questioning this shelter.',
    fact:
      'Jericho is one of the most generous, diverse and inclusive communities in New York.  Our community houses many homeless Long Islanders and in recent years our  schools have had up to 50 homeless students enrolled at any one time. Concerns  about this facility stem from the illegal actions taken by the developer and operator -  non-permitted construction and renovations, zoning violations, absence of any  community notice and hearings. Jericho residents are selfish for questioning this shelter Jericho, a small hamlet with a population of less than 15,000 residents, is being  asked to absorb up to 40% of Nassau County’s homeless families.',
  },
  {
    fiction: 'Many residents in Jericho support the opening of this facility.',
    fact:
      'The Nassau County Executive and developers understood there would be substantial  local opposition to this project and tried to surreptitiously open this facility without  notifying the community, the Town of Oyster Bay or local representatives including  County Legislators Arnold Drucker and Josh Lafazan. Most of the support for this  facility comes from people outside of Jericho.',
  },
];

const lauraData = [
  {
    rumor:
      'This is a Homeless Shelter that will house criminals, sex offenders and drug addicts',
    lauraFact:
      'The Jericho Family Support Center is strictly for families with children',
    fact:
      'As Stated by Nancy Nunziatta on September 10, 2020 at the public hearing, criminals will NOT be turned away.  In addition, no one will commit that this will stay a family facility for more than a year - it will house whatever homeless individuals are the most in need each year.CHI signed a ten-year lease with the owner. The facility can be changed from a family center to a shelter for singles.',
  },
  {
    rumor:
      'Crime will go up and criminals will be roaming the streets of our neighborhood and bring drugs into our schools',
    lauraFact:
      'Creating this type of facility to serve families will ultimately eliminate the other “welfare” hotels in the Jericho area that do not provide services and are unregulated and unsupervised',
    fact:
      'There was no formal statement by Nassau County that the “welfare hotels” will be shut down.  We have asked this direct question several times, and have received no response.  We need it in writing if the intent is to close the Jericho Motels.',
  },
  {
    rumor: 'These families will be living there indefinitely for years',
    lauraFact:
      'CHI has an innovative system to deal with homelessness which sets a “blue ribbon” standard for homeless families designed to get them back on their feet and into permanent homes in a documented average of six to nine months.',
    fact:
      'The amount of money being spent on this location lease is double the market rate, directly taking funds away from the homeless.  The developer, Mr. Shafran, is recouping his money on this investment in 4 years.  That is three times as fast as most other commercial real estate deals. This question  was asked during the legislature’s hearing.  Nancy Nunziatta did not provide any plan to help the homeless family to get permanent homes in 6-9 months.',
  },
  {
    rumor: 'Hundreds of children will enter our schools and stay indefinitely',
    lauraFact:
      'Of the 80 families that have been interviewed for placement in this facility, parents of only 19 children have expressed interest in registering their children in the Jericho schools.',
    fact:
      'This is ONE cohort of families, that according to the above answer will completely change over every year.  We have NO WAY of knowing what future families moving into the facility will elect to do. If a family is then moved to temporary housing again, and not permanent, they are allowed to stay in the Jericho school district until they find permanent housing.',
  },
  {
    rumor: 'Jericho’s #1 ranking will drop because of new homeless students',
    lauraFact:
      'Jericho’s #1 ranking will drop because of new homeless students. There have been children who are homeless attending Jericho schools for many years, up to 45 students at one point, and the ranking has never changed because their commitment has remained steadfast and unwavering.  Neither race, religion, creed, sexual orientation, heritage, economic status nor the ability of the parents to speak English has been a factor in the district’s commitment to our children.',
    fact:
      '1) No one in our group has raised this concern. 2)Mr. Bill Ferro compared the homeless coming to our district for 6-9 months at a time, to some families who do not speak English well in our community.  This is discriminatory and racist, and is being repeated by Laura Curran!',
  },
  {
    rumor:
      'The school district knew about this the whole time and kept the community in the dark',
    lauraFact:
      'There were preliminary discussions with the school district several months ago; however, there was nothing for the school district to communicate with the community. The Hampton Inn was only acquired in July, and was in review by the New York State Office of Temporary and Disability Assistance.  The state inspects and certifies such facilities and typically does not consult the local community',
    fact:
      'Our superintendent stated in an email that went to the entire district that he had an initial meeting in December 2019.  There was another meeting in January where he was told to keep this quiet.  This impacts the community and the community has a right to know and give input in major decisions such as this one. On a different point, if the Hampton Inn was acquired in July, how was the MOU amended in June, [and the lease signed in June]?',
  },
  {
    rumor:
      'It is unsuitable because there is no grocery store within walking distance and no crosswalks',
    lauraFact:
      'Three meals a day will be provided to these families. They do not have stoves in their rooms for cooking, so trips to the grocery stores would be unnecessary.  Crosswalks are close by on Jericho Turnpike at safe crossing areas like by the Dunkin Donuts and The Home Depot.  In addition, there will be a van and bus service providing trips to jobs and appointments for the families',
    fact:
      'Was an impact studied completed to prove the response, or is this the opinion of Laura Curran? Jericho Turnpike is an extremely dangerous road, having at least 3 lanes on each side.  It is not an appropriate setting for children to be crossing.  The road has a 4-way intersection right in front of the building',
  },
  {
    rumor: 'This will destroy our community and tear us apart',
    lauraFact:
      'Only actions of hate based on fear can do that.  Examples of this would be 1) illegally protesting at our community grocery store (Whole Foods is on private property) with a petition to stop the “homeless shelter” under the guise of looking out for the rights of the homeless 2) putting up signs of hate throughout our peaceful community under the guise of need for “transparency” with the hateful message of “say NO to homeless shelter” or 3) sending hate filled, sometimes racist emails to our Board of Education, Superintendent and our elected officials.  These actions run in direct opposition to the welcoming, caring community we know Jericho to be, and is a misrepresentation of the values at the core of our community.  We are kind, inclusive and treat our neighbors with dignity and respect.  So, in facing our fears we put this website together to keep our community informed with TRUTHS based in reality, rather than rumors based on fear. Our community can UNITE under the umbrella of KINDNESS.  Visit https://supportjerichofamilies.org/ or https://communityhousing.org/ for more information.',
    fact:
      'Why is Laura Curran advertising for a private organization established by a 20 year old Jericho Graduate? The statements made are False.  The Jericho community is the victim.  We have been called racists and haters by the BOE.  We have been kept in the dark with regards to plans for erecting a shelter in our community without any notice, community vote, information, studies etc. Protests are not illegal.  We have a right to protest.  This is our First Amendment Right.  All protests have been done peacefully. Signs that have been put up are specifically in opposition to an illegal homeless shelter.  This community is not opposed to the homeless. This plan of conversion from a hotel to transitional housing does not comply with longstanding Town of Oyster Bay laws which were designed to protect the health and safety of our community.  The preliminary injunction was granted. Moreover, the lack of transparency and the explicit actions taken to conceal this mega shelter project from the public were an utter disgrace.',
  },
];

const FictionFact = () => (
  <div className="fiction-fact">
    <h1>
      Laura Curren's Truth <i style={{ fontSize: '24px' }}>vs.</i> The Real
      Truth
    </h1>
    <h3>
      Updated Facts re: Laura Curran’s newest Rumor vs Facts （updated October
      6, 2020)
    </h3>
    {lauraData.map((item) => (
      <div className="fiction-fact-container">
        <div className="rumor">
          <b>Fear/Rumor:</b> {item.rumor}
        </div>
        <div className="laura-truth">
          <b>Laura Curran's Truth:</b> {item.lauraFact}
        </div>
        <div className="truth">
          <b>The Real Truth:</b> {item.fact}
        </div>
      </div>
    ))}
    <h1>Fiction vs Fact</h1>
    {factData.map((item) => (
      <div className="fiction-fact-container">
        <div className="fiction">
          <b>Fiction:</b> {item.fiction}
        </div>
        <div className="fact">
          <b>Fact:</b> {item.fact}
        </div>
      </div>
    ))}
  </div>
);

export default FictionFact;
