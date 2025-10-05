
import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";

import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      data-theme="forest"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* FORM ĐĂNG KÝ - BÊN TRÁI */}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* LOGO */}
          <div className="mb-4 flex items-center justify-start gap-2">
            <ShipWheelIcon className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Call App
            </span>
          </div>

          {/* HIỂN THỊ LỖI (NẾU CÓ) */}
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <div className="w-full">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Tạo tài khoản mới</h2>
                  <p className="text-sm opacity-70">
                    Tham gia Streamify và bắt đầu hành trình học ngôn ngữ của bạn!
                  </p>
                </div>

                <div className="space-y-3">
                  {/* HỌ VÀ TÊN */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Họ và tên</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="input input-bordered w-full"
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  {/* EMAIL */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="nguyenvana@gmail.com"
                      className="input input-bordered w-full"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                    />
                  </div>
                  {/* MẬT KHẨU */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Mật khẩu</span>
                    </label>
                    <input
                      type="password"
                      placeholder="********"
                      className="input input-bordered w-full"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                    />
                    <p className="text-xs opacity-70 mt-1">
                      Mật khẩu phải có ít nhất 6 ký tự
                    </p>
                  </div>

                  <div className="form-control">
                    <label className="label cursor-pointer justify-start gap-2">
                      <input type="checkbox" className="checkbox checkbox-sm" required />
                      <span className="text-xs leading-tight">
                        Tôi đồng ý với{" "}
                        <span className="text-primary hover:underline">điều khoản dịch vụ</span> và{" "}
                        <span className="text-primary hover:underline">chính sách bảo mật</span>
                      </span>
                    </label>
                  </div>
                </div>

                <button className="btn btn-primary w-full" type="submit">
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner loading-xs"></span>
                      Đang xử lý...
                    </>
                  ) : (
                    "Tạo tài khoản"
                  )}
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm">
                    Đã có tài khoản?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      Đăng nhập
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* PHẦN PHẢI - HÌNH ẢNH & MÔ TẢ */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Hình minh họa */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/i.png" alt="Minh họa kết nối ngôn ngữ" className="w-full h-full" />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Kết nối với bạn học ngôn ngữ trên toàn thế giới</h2>
              <p className="opacity-70">
                Luyện tập hội thoại, kết bạn và cùng nhau nâng cao kỹ năng ngôn ngữ của bạn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
