import { FC } from "react";
import { useNavigate } from "react-router";
import { IoEyeOutline } from "react-icons/io5";


interface IBlog {
  id: number;
  title: string;
  content: string;
  tags: string[];
  author: string;
  readTimes?: number;
  createTime: string;
}

interface IProps {
  blog: IBlog;
}

const BlogItem: FC<IProps> = (props) => {
  const { blog } = props;

  const navigate = useNavigate();

  const viewBlogDetail = (id: number) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div
      className="cursor-pointer box-border p-[15px] text-black rounded-lg mb-4 border border-slate-900 dark:border-white"
      key={blog.id}
      onClick={() => viewBlogDetail(blog.id)}
    >
      <div className="text-center text-base font-bold dark:text-white">
        {blog.title}
      </div>
      <div className="flex justify-center items-center my-2  dark:text-slate-400">
        <div className="mr-3">{blog.createTime}</div>
        <div>{blog.author}</div>
      </div>
      <div className="break-all dark:text-white">{blog.content}</div>
      <div className="flex justify-between items-center mt-4">
        <div className="blog-item__read-times dark:text-white flex items-center text-sm">
          <IoEyeOutline /> {blog.readTimes}
        </div>
        <div className="flex justify-end dark:text-white">
          {
            blog.tags.map((tag, index) => (
              <div
                key={index}
                className="text-xs px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg mr-2"
              >
                {tag}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
