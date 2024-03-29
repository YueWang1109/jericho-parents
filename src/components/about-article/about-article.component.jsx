import React from 'react';
import Map from '../../assets/about.png';
import Poster1 from '../../assets/poster1.jpeg';
import Poster2 from '../../assets/poster2.jpeg';
import Where1 from '../../assets/where1.png';
import Where2 from '../../assets/where2.png';
import Where3 from '../../assets/where3.png';
import Conclusion from '../../assets/conclusion.png';
import Population from '../../assets/population.png';
import Homeless from '../../assets/homeless.png';

import './about-article.styles.scss';

const AboutArticle = () => {
  return (
    <div className="about-article">
      <h1>Jericho Homeless Housing Plan Fact Sheet</h1>
      <img src={Map} alt="map" className="img" />
      <ul>
        <li>
          In July, The Town Of Oyster Bay and residents of the Jericho community
          first learned of plans formulated by Nassau County Executive Laura
          Curran to convert the existing{' '}
          <span className="bold big">Hampton Inn</span> into a transitional
          homeless housing facility. The plan never went through the
          legislature!
        </li>
        <li>
          Renovations began <span className="bold">without</span> the necessary
          permits and licenses, and violated longstanding zoning laws of the
          Town of Oyster Bay.
        </li>
        <li>
          Upon learning of the work being performed which were contrary to Town
          law, The <span className="bold">Town of Oyster Bay</span> issued a
          Stop Work Order to the developer (120 WestEnd LLC) on August 3rd. The
          developer ignored the Stop Work Order and continued to make
          renovations to the hotel!
        </li>
        <li>
          Three days later, on August 6th, with the developer continuing to
          ignore their orders, the Town of Oyster Bay filed a lawsuit in the
          Supreme Court, Nassau County seeking a Temporary Restraining Order
          (TRO) to prevent to developer from opening what they contended is an{' '}
          <span className="bold red">illegal shelter under town law</span>.
          Judge Arthur Diamond granted the Town’s request and issued a TRO
          against the developer, 120 WestEnd LLC, halting construction and
          preventing the property from being used for transitional housing. This
          order was later upheld as the Court denied developer’s appeal!
        </li>
        <div className="flyer">
          <img src={Poster1} alt="flyer1" />
          <img src={Poster2} alt="flyer2" />
        </div>
        <li>
          On August 21st,{' '}
          <span className="bold">“Concerned Jericho Parents”</span> filed an
          Order to Show Cause with the Court requesting that Judge Diamond
          permit the approximate 500 Jericho residents serving as plaintiffs to
          intervene in the case brought by the Town against the developer.
        </li>
        <li>
          Legislator Rosie Marie Walker, Chair of the Health and Human Services
          Committee for the Nassau Legislature, has stated that she was never
          made aware of this transitional housing facility before construction
          began. She confirmed that proper safeguards were not put into place
          and that Environmental, Safety & Traffic studies had not been
          conducted.{' '}
        </li>
        <li>
          Jericho currently makes up 1% of Nassau County’s total population and
          already houses 23% of Nassau County’s Homeless Families.{' '}
          <span className="bold">
            With the addition of the proposed shelter at the former Hampton Inn,
            Jericho will house about 60% of Nassau County’s Homeless Families.
          </span>{' '}
        </li>

        <div className="image-container">
          <img src={Population} alt="population" />
          <img src={Homeless} alt="homeless" />
        </div>
        <li>
          Joel Shafran (120 Westend LLC) purchased the Hampton Inn for $13.5
          million. Community Housing Innovations (CHI), the managing agent, will
          receive approximately $6.5 million from the state to fund this
          transitional facility that will house 80 families. CHI will pay $3.5
          million to Joel Shafran and leave CHI with $3 million to operate the
          facility.{' '}
          <span className="bold">
            In 10 years, Shafran stands to make $25 million from this
            investment.
          </span>{' '}
        </li>
        <div className="fact">
          <img src={Where1} alt="where1" />
          <img src={Where2} alt="where2" />
          <img src={Where3} alt="where2" />
        </div>
        <li>
          The county will spend approximately{' '}
          <span className="bold">$81,340 annually per family</span> to provide
          each homeless family with the above{' '}
          <span className="bold">temporary</span> housing, a 400 square foot
          room and 3 meals.{' '}
        </li>
        <li>
          On September 21st, Judge Arthur Diamond of the Supreme Court, Nassau
          County granted the Town of Oyster Bay’s Motion for a Preliminary
          Injunction, finding that the developer’s position – that State law
          pre-empted local Town laws – was both flawed and incorrect. By virtue
          of the Judge’s decision, the Order restraining the developer from
          engaging in any construction on the property remains in effect while
          the case – which seeks a Permanent Injunction
        </li>
        <div className="fact">
          <img src={Conclusion} alt="conclusion" />
        </div>
      </ul>
    </div>
  );
};

export default AboutArticle;
