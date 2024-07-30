import { useEffect, useState } from 'react';
import gamesAPI from '../../api/games-api';
import LatestGames from './latest-game/LatestGame';

export default function Home() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        (async () => {
            //to do modify to get last 3 games
            const result = await gamesAPI.getAll();

            setLatestGames(result);
        })();
    }, []);
    return (
        <>
            <section id="welcome-world">
                <div className="welcome-message">
                    <h2>ALL new games are</h2>
                    <h3>Only in GamesPlay</h3>
                </div>
                <img src="./images/four_slider_img01.png" alt="hero" />

                <div id="home-page">
                    <h1>Latest Games</h1>
                    {latestGames.length > 0 ? (
                        latestGames.map((game) => (
                            <LatestGames key={game._id} {...game} />
                        ))
                    ) : (
                        <p className="no-articles">No games yet</p>
                    )}
                </div>
            </section>
        </>
    );
}
