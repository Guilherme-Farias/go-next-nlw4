import styles from '../styles/pages/Home.module.css'
import ExperienceBar from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Next.JS</h1>
          <ExperienceBar />
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
            </div>
            <div>

            </div>
          </section>
    </div>
  )
}
