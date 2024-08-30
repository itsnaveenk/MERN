export function VideoCard(props: any) {
    return (
        <div className="">
            <img src={props.image} />
            <div className="grid grid-cols-12">
                <div className="col-span-1 border-200">
                    <img
                        className="rounded-full aspect-square p-2 m-1"
                        src={props.avatar}
                    />
                </div>
                <div className="col-span-11 p-2 pl-5">
                    <div>
                        {props.title}
                    </div>
                    <div className="col-span-11 text-gray-400 text-base">
                        {props.auther}
                    </div>
                    <div className="col-span-11 text-gray-400">
                        {props.views} | {props.timestamp}
                    </div>
                </div>

            </div>
        </div>
    );
}
