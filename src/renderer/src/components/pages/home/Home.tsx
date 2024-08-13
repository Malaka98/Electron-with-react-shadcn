import {Link, useNavigate} from "react-router-dom";
import {Card, CardHeader, CardTitle} from "../../ui/card";
import {ExternalLink, NotebookPen} from "lucide-react";
import {Button} from "../../ui/button";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="flex justify-center items-center h-screen w-full">
                <Button onClick={() => navigate('/')} className="absolute top-0 left-0 m-6">Back</Button>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-4">
                    <Link to={'/'}>
                        <Card className=" hover:cursor-pointer">
                            <CardHeader
                                className="relative flex flex-col gap-2 items-center justify-center min-h-[120px]">
                                <div className={"absolute top-0 right-0 m-3"}>
                                    <ExternalLink/>
                                </div>
                                <div id="BPActivity-ICON">
                                    <NotebookPen size={'30px'}/>
                                </div>
                                <CardTitle className="text-sm font-medium">
                                    BP Activity
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>

                    <Link to={'/'}>
                        <Card className=" hover:cursor-pointer">
                            <CardHeader
                                className="relative flex flex-col gap-2 items-center justify-center min-h-[120px]">
                                <div className={"absolute top-0 right-0 m-3"}>
                                    <ExternalLink/>
                                </div>
                                <div id="BPActivity-ICON">
                                    <NotebookPen size={'30px'}/>
                                </div>
                                <CardTitle className="text-sm font-medium">
                                    BP Activity
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>

                    <Link to={'/'}>
                        <Card className=" hover:cursor-pointer">
                            <CardHeader
                                className="relative flex flex-col gap-2 items-center justify-center min-h-[120px]">
                                <div className={"absolute top-0 right-0 m-3"}>
                                    <ExternalLink/>
                                </div>
                                <div id="BPActivity-ICON">
                                    <NotebookPen size={'30px'}/>
                                </div>
                                <CardTitle className="text-sm font-medium">
                                    BP Activity
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                    <Link to={'/'}>
                        <Card className=" hover:cursor-pointer">
                            <CardHeader
                                className="relative flex flex-col gap-2 items-center justify-center min-h-[120px]">
                                <div className={"absolute top-0 right-0 m-3"}>
                                    <ExternalLink/>
                                </div>
                                <div id="BPActivity-ICON">
                                    <NotebookPen size={'30px'}/>
                                </div>
                                <CardTitle className="text-sm font-medium">
                                    BP Activity
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Home