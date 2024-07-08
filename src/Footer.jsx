export default function Footer(){

    return(
        <footer className="p-4 mt-5 bg-success text-light position-absolute w-100 bottom-0">
            <p className="lead text-center text-capitalize">all rights reserved &copy; {new Date().getFullYear()}</p>
        </footer>
    )
}