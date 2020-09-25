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

const FictionFact = () => (
  <div className="fiction-fact">
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
