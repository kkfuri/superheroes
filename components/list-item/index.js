function ListItem({ item }) {
  return (
    <article className="mx-auto group cursor-pointer duration-150 border border-gray-200 transform p-4 rounded-lg shadow-xl hover:shadow-2xl hover:bg-gray-100 hover:border-primary hover:scale-110">
      <h1 className="text-center font-body duration-300 font-normal text-2xl group-hover:text-primary mb-2">
        {item.name}
      </h1>
      <div
        className="rounded-sm overflow-hidden shadow-md"
        style={{ width: 240, height: 320 }}
      >
        <img
          className="object-cover"
          src={item.image.url}
          width={240}
          height={320}
        />
      </div>
    </article>
  );
}

export default ListItem;
