import React from 'react';
import Jokes from './Jokes';
import Button from './Button';
import styles from '../sass/components/main.module.scss';

class Main extends React.Component {
    state = {
        jokes: [],
        number: 0
    }

    handlePassNumber = (number = this.state.number) => {
        return number;
    }

    handleFetchData1 = () => {
        fetch(`http://api.icndb.com/jokes/random/${this.handlePassNumber(3)}`)
            .then(response => {
                if (response.ok) {
                    return response
                } throw Error(response.status)
            })
            .then(response => response.json())
            .then(jokes => {
                this.setState({
                    jokes: jokes.value
                })
            })
            .catch(error => console.log(error))
    }

    handleFetchData2 = () => {
        fetch(`http://api.icndb.com/jokes/random/${this.handlePassNumber(5)}`)
            .then(response => {
                if (response.ok) {
                    return response
                } throw Error(response.status)
            })
            .then(response => response.json())
            .then(jokes => {
                this.setState({
                    jokes: jokes.value
                })
            })
            .catch(error => console.log(error))
    }

    handleFetchData3 = () => {
        fetch(`http://api.icndb.com/jokes/random/${this.handlePassNumber(10)}`)
            .then(response => {
                if (response.ok) {
                    return response
                } throw Error(response.status)
            })
            .then(response => response.json())
            .then(jokes => {
                this.setState({
                    jokes: jokes.value
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        const jokes = this.state.jokes;
        return (
            <main className={styles.main}>
                <div className={styles.app}>
                    <div className={styles.app__image}></div>
                    <section className={styles.app__data}>
                        <h1 className={styles.app__title}>How many jokes you want to see?</h1>
                        <div className={styles.app__buttons}>
                            <Button click={this.handleFetchData1} number={this.handlePassNumber(3)} />
                            <Button click={this.handleFetchData2} number={this.handlePassNumber(5)} />
                            <Button click={this.handleFetchData3} number={this.handlePassNumber(10)} />
                        </div>
                        {jokes ? <Jokes jokes={jokes} /> : jokes}
                    </section>
                </div>
                <div className={styles.description}>
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>slack integration</h2>
                        <div className={styles.article__description}>
                            <p>The Chuck Norris app existed even before slack existed. Start retrieving random Chuck Norris facts by just typing /chuck into your slack console.</p>
                            <p>Additionally you can type `/chuck &#123; category_name &#125;` to get a random joke from a given category. Type /chuck -cat to show a list of all available categories.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore soluta placeat, nisi minima corrupti illum obcaecati neque sapiente odit eius non quaerat. Vel quidem dignissimos maiores iusto sint atque nemo.</p>
                            <p>You can also try the free text search by sending `/chuck ? &#123; search_term &#125;`.</p>
                            <p>Fool your coworkers by personalizing your Chuck Facts with `/chuck @ &#123; user_name &#125;`.</p>
                            <a className={styles.article__descriptionLink} href="https://kursreacta.slack.com/oauth/812452117633.ac82992f2c3ed4fd084b0f3a52f7c21ced7e38eb1f982cbe2c2255fa732c2ecf" target="_blank">add to slack</a>
                            <p>Installation takes just 1 minute!</p>
                            <p>Help: From within slack, you can just type /chuck help for some extra information on how to use the app.</p>
                            <p>Source: https://api.chucknorris.io</p>
                        </div>
                    </article>
                    <article className={styles.article}>
                        <h2 className={styles.article__title}>facebook messanger</h2>
                        <p>The Chuck Norris app is also on Facebook Messenger. Click the Message Us button below to start a conversation.</p>
                        <p>You can simply ask a random joke by typing `hi, tell me a joke `. To get help to get started type `help`.</p>
                        <p>Contact: Feel free to tweet ideas, suggestions, help requests and similar to @matchilling or drop me a line at m@matchilling.com</p>
                        <p>Privacy: The app was a weekend project and is just fun. All we're storing are team and user ids and the appropriate OAuth tokens. This allows you to post these awesome Chuck Norris facts on slack on the appropriate channel. Our applications is hosted on https://aws.amazon.com/privacy. We use a secure connection between slack servers and aws. We anonymously keep track of two data points; the total number of teams and unique users. None of the data will ever be shared, except for maybe some anonymous statistics in the future.</p>
                    </article>
                </div>
            </main>
        )
    }
}

export default Main; 