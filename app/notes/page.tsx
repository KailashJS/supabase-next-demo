import { createClient } from "@/utils/supabase/server";

export default async function Notes() {
    const supabase = createClient();
    const { data: notes } = await supabase.from('notes').select();
    return (
        <>
        <div className="m-auto">
            <pre className="border-2 border-white p-5 m-auto">{JSON.stringify(notes, null, 2)}</pre>
            <div className="py-2">
                <a
                    className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border"
                    href="/"
                >
                    Home
                </a>
            </div>
        </div>
        </>
    )
} 