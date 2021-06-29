interface PrimerComponenteProps {
    name: string;
}
const PrimerComponente = ({name}: PrimerComponenteProps) => {
    return (
        <div>Hola {name}</div>
    );
}
export default PrimerComponente