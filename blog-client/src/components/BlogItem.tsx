import { FC } from "react";
import { useNavigate } from "react-router";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { LuEye, LuMessageSquareMore } from "react-icons/lu";
import { getTimeAgo } from "@/utils";

interface IBlog {
  id: number;
  title: string;
  content: string;
  tags: string[];
  author: string;
  readCount: number;
  likeCount: number;
  commentCount: number;
  coverImg: string;
  createTime: number;
}

interface IProps {
  blog: IBlog;
}

const BlogItem: FC<IProps> = (props) => {
  const { blog } = props;

  const navigate = useNavigate();

  const viewBlogDetail = () => {
    const { id } = blog;
    navigate(`/blog/${id}`);
  };

  return (
    <div
      className=" flex cursor-pointer box-border p-[15px] text-black rounded-lg mx-w-[750px] mb-4 last:mb-0 border border-slate-900 dark:border-white"
      key={blog.id}
      onClick={viewBlogDetail}
    >
      <div className="flex-1">
        <div className="text-center text-base font-bold dark:text-white">
          {blog.title}
        </div>
        <div className="flex justify-center items-center my-2  dark:text-slate-400">
          <div className="mr-3">{getTimeAgo(blog.createTime)}</div>
          <div>{blog.author}</div>
        </div>
        <div className="break-all dark:text-white">{blog.content}</div>
        <div className="flex justify-between items-center mt-4 dark:text-white">
          <div className="flex items-center gap-4">
            <div className="blog-item__read-times flex items-center text-sm gap-1">
              <LuEye /> {blog.readCount}
            </div>
            <div className="flex items-center gap-1">
              <BiLike /> {blog.likeCount}
            </div>
            <div className="flex items-center gap-1">
              <LuMessageSquareMore />  {blog.likeCount}
            </div>
          </div>

          <div className="flex justify-end dark:text-white">
            {
              blog.tags.map((tag, index) => (
                <div
                  key={index}
                  className="text-xs px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg ml-2"
                >
                  {tag}
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {
        blog.coverImg && (
          <img
            className="flex-grow-0 flex-shrink-0 w-[200px] h-[128px] ml-[24px] rounded-md hidden lg:block"
            src={blog.coverImg}
            alt="cover"
          />
        )
      }
    </div>
  );
};

export default BlogItem;
