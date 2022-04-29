class PostsController < ApplicationController
  before_action :post_params, only: %i[new create index]
  def index
    @posts = Post.all
  end
    def new
        @post = Post.new # needed to instantiate the form_for
    end
    def create
        @post = Post.new(post_params)
        
        @post.save

        # no need for app/views/posts/create.html.erb
        
      end
    
      private
    
      def post_params
        params.require(:post).permit(:content,:Xpos,:Ypos)
      end
end
