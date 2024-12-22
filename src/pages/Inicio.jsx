import ServiceList from "../components/ServiceList"
import Header from '../components/Header';


const Inicio = () => {
    return (
        <div>
            <Header title="Bienvenido a mi PuntoSalud" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet, ante id pellentesque ullamcorper, purus ex pellentesque mi, id tempor ligula arcu et nisi. Sed sit amet orci facilisis, posuere erat sed, luctus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ut purus sit amet mi tristique facilisis. Curabitur scelerisque erat vel lorem fringilla pharetra. Donec nisl metus, semper eget pretium a, pellentesque eget eros. Sed aliquet faucibus porttitor. Maecenas tempor ligula ipsum, id tempus lorem congue a. Etiam eget fringilla magna. Vestibulum at sem nisl. Sed pellentesque non augue ut elementum. " className="header-style"/>
            <ServiceList/>
        </div>
    )
}

export default Inicio
