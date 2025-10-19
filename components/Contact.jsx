export default function Contact() {
    const LinkedIn = () => {
        window.open('https://www.linkedin.com/in/blakehansenprogrammer/', '_blank');
    };

    return (
        <main classname="Contact">
            <button onClick={LinkedIn}>LinkedIn</button>
        </main>
    );
}
