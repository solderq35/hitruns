import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import styles from "./Navigation.module.scss"

type Props = {
    className?: string
}

const Navigation = ({ className }: Props): JSX.Element => (
    <Navbar
        className={`${styles.navigation} ${className}`}
        expand="sm"
        variant="dark"
    >
        <Navbar.Toggle
            aria-controls="navbar"
            className={styles["navigation-toggle"]}
        />
        <Navbar.Collapse id="navbar">
            <Nav className={`px-0`}>
                <a href="/" className="py-2 px-3">
                    Home
                </a>

                <a
                    href="https://hitruns-wiki.vercel.app/docs/index"
                    className="py-2 px-3"
                    target="_blank"
                    rel="noreferrer"
                >
                    Guides
                </a>

                <a
                    href="https://hitruns-wiki.vercel.app/docs/resources"
                    className="py-2 px-3"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resources
                </a>

                <a
                    href="https://speedrun.com/hitman_3"
                    className="py-2 px-3"
                    target="_blank"
                    rel="noreferrer"
                >
                    Official Leaderboards (Speedrun.com)
                </a>
                <a
                    href="https://github.com/solderq35/hitruns"
                    className="py-2 px-3"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>

                <a
                    href="https://hitruns-wiki.vercel.app/docs/discord"
                    className="py-2 px-3"
                    target="_blank"
                    rel="noreferrer"
                >
                    Discord
                </a>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Navigation
