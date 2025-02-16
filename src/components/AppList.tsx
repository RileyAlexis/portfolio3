import { Card } from "./Card/Card"

export const AppList: React.FC = () => {
    return (
        <div className="appListContainer">
            <Card>
                <a onClick={() => window.open('https://velvet.rileyalexis.com', '_blank')} style={{ cursor: 'pointer' }}>
                    <h3>Velvet</h3>
                    <p>
                        A voice resonance analyzer utilizing the Web Audio API. It isolates the Fundamental Frequency and the First Formant Frequency from
                        human speech and provides real time feedback on voice resonance.
                    </p>
                </a>
            </Card>

            <Card>
                <a onClick={() => window.open('https://transphasic.asuscomm.com', '_blank')} style={{ cursor: 'pointer' }}>

                    <h3>Transbabbler</h3>
                    <p>
                        A simple technobabble generator using Node/Express backend with a self-hosted MongoDB instance. Transbabble can generate
                        babble from multiple datasets and allows users to save generated phrases.
                    </p>
                </a>
            </Card>
            <Card>
                <a onClick={() => window.open('https://tinkl.app', '_blank')} style={{ cursor: 'pointer' }}>
                    <h3>Tinkl</h3>
                    <p>
                        tinkl is a bathroom-finder app that locates nearby gender-neutral and single-stall bathrooms so that trans,
                        nonbinary and gender non-conforming people can pee in peace. Tinkl is a collaboration between multiple developers
                        and UI designers.
                    </p>
                </a>
            </Card>
        </div>
    )
}