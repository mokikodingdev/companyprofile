import ConsultationForm from "../components/ConsultationForm"

const Consultation = () => {
    return (
        <div className="w-full py-10 px-10 md:px-30 flex flex-col justify-center items-center gap-3">
            <h1 className="text-3xl font-semibold">Konsultasi Gratis</h1>
            <ConsultationForm />
        </div>
    )
}

export default Consultation
