import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
    {
        name: "Bassem",
        avatat: "B",
        title: "Freelance Software Engineer",
        description: "An amazing platform to generate all medias in one place."
    },
    {
        name: "Amine",
        avatat: "A",
        title: "Software Engineer",
        description: "Nice smart idea in one place."
    },
    {
        name: "Marien",
        avatat: "M",
        title: "Content manager",
        description: "Would defintly recommand it to many friends."
    },
    {
        name: "Marien",
        avatat: "M",
        title: "Content manager",
        description: "Would defintly recommand it to many friends."
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    testimonials.map(
                        (items, index) =>
                        <Card key={index} className="bg-[#192339] border-none text-white" >
                            <CardHeader>
                                <CardTitle className="flex items-center gap-x-2">
                                    <div>
                                        <p className="text-lg">{items.name}</p>
                                        <p className="text-zinc-400 text-sm">{items.name}</p>
                                    </div>
                                </CardTitle>
                                <CardContent className="pt-4 px-0">
                                    {items.description}
                                </CardContent>
                            </CardHeader>
                        </Card>
                    )
                }
            </div>
        </div>
    )
}