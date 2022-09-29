import styles from '../styles/components/scroll/Scroll.module.scss'
import { CenterTitle } from './scroll/CenterTitle'
import { Finish } from './scroll/Finish'
import { List } from './scroll/List'
import { Message } from './scroll/Message'
import { Person } from './scroll/Person'
import { ScrollItemLayout } from './scroll/ScrollItemLayout'
import { Send } from './scroll/Send'
import { Slider } from './scroll/Slider'
import { Statistics } from './scroll/Statistics'
import { StatisticsOneValue } from './scroll/StatisticsOneValue'
import { Targeting } from './scroll/Targeting'
import { TwoQuotes } from './scroll/TwoQuotes'

export const Scroll = () => {
    return(
        <section className={styles.container}>
          <ScrollItemLayout id={1}>
            <Person/>
          </ScrollItemLayout>

          <ScrollItemLayout id={2}>
            <TwoQuotes
              firstQuote='Many companies are trying, but yet failing to get the results they need!'
              secondQuote='So, Christian decided to launch a Social Selling Campaign to get new clients.'/>
          </ScrollItemLayout>

          <ScrollItemLayout id={3}>
            <Message
              title="Here is his connection request to prospects:"
              mail="message-3"/>
          </ScrollItemLayout>

          <ScrollItemLayout id={4}>
            <Message
              title="His 1st Linkedln message:"
              mail="message-1"/>
          </ScrollItemLayout>

          <ScrollItemLayout id={5}>
            <Message
              title="And this is LinkedIn Message:"
              mail="message-2"/>
          </ScrollItemLayout>

          <ScrollItemLayout id={6}>
            <Send/>
          </ScrollItemLayout>

          <ScrollItemLayout id={7}>
            <CenterTitle title="Waits 2 days..."/>
          </ScrollItemLayout>

          <ScrollItemLayout id={8}>
            <CenterTitle title="2 weeks, and..."/>
          </ScrollItemLayout>

          <ScrollItemLayout id={9}>
            <Statistics
              title="Landed with this...."
              firstSubtitle="connection rate"
              secondSubtitle="reply rate"
              thirdSubtitle="meetings rate"
              firstResult='12%'
              secondResult='0.01%'
              thirdResult='0%'/>
          </ScrollItemLayout>

          <ScrollItemLayout id={10}>
            <CenterTitle title="But the worst part is that ..."/>
          </ScrollItemLayout>

          <ScrollItemLayout id={11}>
            <StatisticsOneValue
              title="he got:"
              result="0"
              subtitle="qualified meetings booked"/>
          </ScrollItemLayout>

          <ScrollItemLayout id={12}>
            <CenterTitle title="So, what went wrong?"/>
          </ScrollItemLayout>

          <ScrollItemLayout id={13}>
            <Targeting/>
          </ScrollItemLayout>

          <ScrollItemLayout id={14}>
            <List
              title="2 - Connection rate was poor"
              firstFact="He didn't use icebreakers and personalization."
              secondFact="That means the prospect found him to salesy and ignored his request."/>
          </ScrollItemLayout>

          <ScrollItemLayout id={15}>
            <List
              title="3 - Reply Rate after connection"
              firstFact="He lacked personalization and icebreakers to create a human connection."
              secondFact="That means the prospect found him to salesy and ignored him."/>
          </ScrollItemLayout>

          <ScrollItemLayout id={16}>
            <List
              title="4 - Follow ups"
              firstFact="Christian stopped after just one follow-up message."
              secondFact="Plus, his message was basic and not giving any value to his prospects and lacked peronalization."/>
          </ScrollItemLayout>

          <ScrollItemLayout id={17}>
            <List
              title="5 - Pitch"
              firstFact="The value proposition was off and his call to action (CTA) very unclear."
              secondFact="In the end, no relationship was built."/>
          </ScrollItemLayout>

          <ScrollItemLayout id={18}>
            <TwoQuotes
              firstQuote='After seeing his bad results, Christian decides to get expert advice on his Social Selling efforts.'
              secondQuote='He heard about Demands Social Selling Masterclass and decided to try it.'/>
          </ScrollItemLayout>

          <ScrollItemLayout id={19}>
            <CenterTitle title="1. He goes through 100% of the course"/>
          </ScrollItemLayout>

          <ScrollItemLayout id={20}>
            <CenterTitle title="2. Attends the watching all videos on demand"/>
          </ScrollItemLayout>

          <ScrollItemLayout id={21}>
            <CenterTitle title="3. Asks for feedback and reviews"/>
          </ScrollItemLayout>

          <ScrollItemLayout id={22}>
            <CenterTitle title="4. he apply his learnings"/>
          </ScrollItemLayout>

          <ScrollItemLayout id={23}>
            <CenterTitle title="And within 4 weeks..."/>
          </ScrollItemLayout>

          <ScrollItemLayout id={24}>
            <Statistics
              title="Christian gets these results:"
              firstSubtitle="connection rate"
              secondSubtitle="reply rate"
              thirdSubtitle="meeting rate"
              firstResult='67%'
              secondResult='43%'
              thirdResult='32%'/>
          </ScrollItemLayout>

          <ScrollItemLayout id={25}>
            <StatisticsOneValue
              title="Plus,"
              result="32%"
              subtitle="qualified meetings booked"
              isMainResult/>
          </ScrollItemLayout>



          <Finish/>

          <p>Got a question? Send it <a
            className={styles.link}
            href="https://www.linkedin.com/in/jqvist/">over here</a>
          </p>
        </section>
    )
}
