import { YMaps, Map, Placemark } from "react-yandex-maps";
import './Map.scss'

const getPointOptions = () => {
    return {
        iconColor: '#ff0000' // Цвет маркера, можно менять!
    };
};

const mapState = {
    center: [40.5073985, 72.8133508], // Здесь можно поменять координаты, но эти же координаты 
    //надо вставить в 29стоку
    zoom: 18.2, // Отображение маркера 
    behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"] // Убирает
    // увеличение/уменьшение при скролле и.тд

};

const Maps = () => {

    return (
        <YMaps>
            <Map
                state={mapState}
                width="100%"
                height="400px">
                <Placemark
                    options={getPointOptions()}
                    geometry={[40.5073985, 72.8133508]} //Кординаты 
                />
            </Map>
        </YMaps >

    )
}


export default Maps