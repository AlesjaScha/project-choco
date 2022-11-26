import imageSix from './bild2.jpg';


function AboutUs(){
    return(
    <div>

        <div className="titleGift">
            <h4>Über uns</h4>
        </div>
        <div>
        <p>Kauf der Merkur Confiserien AG in der Schweiz mit mehr als 40 Filialen, um die Endkonsumenten zu erreichen. Zu diesem Zeitpunkt wird die Idee der „FrischSchoggi“ geboren: der Konsument hat die Möglichkeit sich in der Chocolaterie von der grossen FrischSchoggiTM Tafel ein Stück seiner Wahl abbrechen zu lassen – vergleichbar mit einer Käsetheke.Der beste Chocolatier der Welt kommt aus der Schweiz! Mit seinen aussergewöhnlichen Schokoladenkreationen kann sich Elias Läderach am World Chocolate Masters 2018 in Paris gegen 19 internationale Konkurrenten durchsetzen. Zwei seiner Kreationen die die Jury besonders beeindruckt haben, stehen nun für alle Schoggiliebhaber bereit: das Masters Tablet Caramel und das Masters Bonbon Mandarine sind in allen Läderach Chocolaterien erhältlich.“Im November 2019 eröffnet Läderach seine ersten Chocolaterien in den USA und Kanada mit dem neuen Laden-Design.

            Neben Amerika erschloss Läderach auch den britischen Markt und eröffnete Ende 2019 seine erste Chocolaterie in London.”</p> 
        </div>


        <div className='chocoGifts'>
            <img src={imageSix}width="500px"alt="six"/>
        </div>

    </div>
    )
}
export default AboutUs;