import React from 'react';

import Layout from 'common/Layout';
import SimpleHeader from 'components/sections/SimpleHeader';
import Footer from 'components/sections/Footer';

import { Container } from 'components/global';

import theme from '../theme';

const RulesPage = () => (
  <Layout>
    <SimpleHeader />
    <Container style={{ fontSize: '13px', lineHeight: '1.6em' }}>
      <h3 style={{ color: theme.color.blue.regular }}>Rules &amp; Code of Conduct</h3>
      <br/>

      <p>ETHGlobal events are community hackathons intended for collaboration and learning in the student community. We value the participation of each member of the student community and want all attendees to have an enjoyable and fulfilling experience. Accordingly, all attendees are expected to show respect and courtesy to other attendees throughout the hackathon. To make clear what is expected, all attendees and speakers at this hackathon are required to conform to the following Code of Conduct. Organizers will enforce this code throughout the event.</p>
      
      <h4>The Code</h4>
      <p>
        Harassment includes but is not limited to offensive verbal comments, hacks, or other online activity related to gender, sexual orientation, physical or mental ability, age, socioeconomic status, ethnicity, physical appearance, race, religion, sexual images, deliberate intimidation, stalking, inappropriate physical contact, and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately. If participants fail to comply they will be asked to leave the event.
        <br/><br/>
        Sponsors, judges, mentors, volunteers, organizers, ETHGlobal staff and anyone else at the event are also subject to the anti-harassment policy. In particular, attendees should not use sexualized images, activities, or other material both in their hacks and during the event. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.
        <br/><br/>
        Be careful and mindful of the words that you choose. Remember that sexist, racist, and other exclusionary comments and hacks can be offensive to those around you.
        <br/><br/>
        If a participant engages in behavior that violates this code of conduct, the hackathon organizers will take any action they deem appropriate, including warning the offender or expulsion from the event.
        <br/><br/>
        If you feel uncomfortable or think there may be a potential violation of the code of conduct, please report it immediately to one of the event organizers or by emailing us at <a href='mailto:incidents@ethglobal.co' target='_blank' rel='noopener noreferrer'>incidents@ethglobal.co</a>. All reporters have the right to remain anonymous.
      </p>

      <h4>Event Rules &amp; Conditions</h4>
      <ol>
        <li>The following rules &amp; conditions apply to each ETHGlobal event ("The Event")</li>
        <li>If you are under the age of 18, you must obtain consent from your parent or guardian to participate in our events and your parent or guardian is required to agree to these conditions - an agreement signed by your parent or guardian must be submitted separately before attending The Event. You acknowledge that, even as a minor, you must read and understand the content of this Agreement, and that you have the capacity and intend to be bound by the terms of this Agreement.</li>
        <li>You must comply with all facility and equipment rules and requirements during your participation in The Event, including all safety instructions and requirements. You are not to take unreasonable risks while using the facilities where The Event is located, including causing any other person using such facilities an unreasonable risk of harm</li>
        <li>You assume full responsibility for any damage or injury caused by you in your participation in The Event (whether to persons or property, and whether to yourself or others) and release the ETHGlobal, The Event, all sponsors of The Event, The Event volunteers, The Event staff, guests of The Event and all other participants in The Event (collectively, the “Releasees”) from any liability therefore. **YOU ARE AWARE THAT YOUR PARTICIPATION IN The Event IS SOLELY AT YOUR OWN RISK, AND THAT THE RELEASE HEREIN IS INTENDED TO REFLECT THAT UNDERSTANDING**.</li>
        <li>You will own any developments made by you during The Event, and all right, title and interest in those developments, including the intellectual property rights therein, shall belong to you. However, you acknowledge that during the course of The Event, you may obtain access to products, developments, information and other materials belonging to other participants of The Event, the sponsors of The Event and/or other third parties (“Third Party Materials”), and that nothing in this Agreement is deemed to transfer any ownership, right, title or interest in such Third Party Materials to you. Your only rights to the Third Party Materials shall be those expressly granted to you by the owner(s) of the Third Party Materials. Specifically, any APIs or other software provided to you by sponsors of The Event are subject to the subscription terms and software licenses associated with such APIs or other software.</li>
        <li>You acknowledge that The Event is intended to be an event where ideas are shared freely, and therefore acknowledge that any information that you share with other participants of The Event, the sponsors of The Event and/or other third parties during The Event is solely at your discretion and risk. If you wish to protect your information, it is solely your responsibility to implement confidentiality and security measures with respect to the persons to whom you are disclosing your information. None of the Releasees shall have any responsibility under this Agreement or by virtue of their participation in The Event with respect to your information.</li>
        <li>You acknowledge that the organizers and sponsors of The Event, including the ETHGlobal (collectively, the “Organizers”) will be recording the The Event event on video, photographs, audio recording and other media, and therefore agree that:
          <ol>
            <li>The Organizers have the unrestricted right to use your likeness, image, voice, opinions, and appearance, and also any images of your projects, developments, materials and belongings made at or brought to The Event, captured through video, photographs or other media during The Event for the express purpose of creating promotional material (the “Images”), for the purposes of use in websites, promotional materials, publications and other media of any of the Organizers, whether in print or electronically (the “Materials”). The foregoing right includes permission to copyright, use, re-use, publish, and republish Images in which you may be included, intact or in part, composite or distorted in character or form, without restriction as to changes or transformations, in conjunction with your own or a fictitious name, reproduction in color or otherwise, made through any and all media now or hereafter known;</li>
            <li>The Organizers shall solely own the Materials in which you or your Images, in whole or in part, may appear, including copyright interests, and you have no ownership rights therein;</li>
            <li>You give all clearances, copyright and otherwise, for use of your Images, and waive any moral rights that you may have in the Materials in which you or your Images may appear. The rights granted to the Hackathon Organizers herein are perpetual and worldwide. For greater certainty, my Images may continue to be used after the completion of The Event;</li>
            <li>You relinquish any right that you may have to examine or approve the Materials in which you or your Images may appear or the use to which they may be applied; and</li>
            <li>You hereby release, discharge and agree to save harmless each and all of the Organizers from any liability by virtue of any blurring, distortion, alteration, optical illusion, or use in composite form of the Images whether intentional or otherwise, that may occur or be produced in the recording of the Images or in any subsequent processing thereof, as well as any publication thereof, including without limitation any claims for libel or invasion of privacy.</li>
          </ol>
        </li>

        <li>You agree that the Organizers may share your registration details, LinkedIn/Github profiles, details of your Hackathon product, and other information obtained from you in the course of, or relating to, The Event with the sponsors of The Event, and acknowledge that such sponsors of The Event may contact you during and after The Event. By agreeing to this document and/or participating in The Event, you are providing your express consent to communications by the Organizers and sponsors (including e-mail communications, both marketing and informational) respecting the products and services of the Organizers and sponsors, and future events.</li>
        <li>You acknowledge that alcohol, drugs or weapons of any kind shall not be present or consumed during any official The Event function. Participants will act responsibly and should wear their The Event identification badge at all times during the event</li>
        
        
        <div style={{margin: "20px 0"}}><i>For valuable consideration, including permission to take part in The Event, the undersigned on behalf of him/herself, his or her personal representatives, assigns, heirs and next of kin:</i></div>
        <li>hereby covenants not to sue, and releases, waives, and discharges the Releasees, their owners, officers, agents, affiliates, employees, volunteers, and/or any other person or entity in any way associated with The Event, from liability for any injury to the person or property or death of the undersigned arising out of or related to use of the premises, equipment, or other facilities of the Releasees, whether caused by an act of negligence of the Releasees or otherwise; and</li>
        <li>hereby assumes full responsibility for any risk of bodily injury, death or property damage arising out of or related to their participation in The Event, whether occurring to the undersigned or to any other person or entity for whom the undersigned is responsible or with whom the undersigned is associated, and whether caused by an act of negligence of the Releasees or otherwise. The foregoing release includes, but is not limited to, any occurrences of personal injury, illness (food-borne or otherwise), and loss of belongings, whether by theft or otherwise. The undersigned further agrees that this instrument (the terms of which collectively are referred to as the Agreement) is intended to be as broad and inclusive as is permitted by the laws of the State of California and that if any portion thereof is held invalid, that portion shall be invalid only to the extent required by law, and the balance shall, notwithstanding, continue in full force and effect.</li>
      </ol>
    </Container>
    <Footer style={{ marginTop: '100px' }}/>
  </Layout>
);


export default RulesPage;
