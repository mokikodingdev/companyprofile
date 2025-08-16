const ConsultationForm = () => {
    return (
        <form action="" className="w-full px-0 md:px-10 flex flex-col items-center mt-5">
            <div className="w-full md:w-5/6 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row w-full justify-center items-center gap-4">
                    <div className="flex flex-col w-full md:w-1/2">
                        <label htmlFor="fullname">Nama Lengkap</label>
                        <input type="text" name="fullname" id="fullname" className="p-2 border-1 border-gray-400 w-full rounded" />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <label htmlFor="phone">Nomor Telepon</label>
                        <input type="text" name="phone" id="phone" className="p-2 border-1 border-gray-400 w-full rounded" />
                    </div>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="consultation">Konsultasi</label>
                    <textarea type="text" name="consultation" id="consultation" className="p-2 border-1 border-gray-400 w-full rounded" rows={5}></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-moki-blue p-3 w-full md:w-1/2 rounded text-white font-semibold">Kirim Konsultasi</button>
                </div>
            </div>
        </form>
    )
}

export default ConsultationForm
