class MicropostsController < ApplicationController

	def index
		@microposts = Micropost.all
		# render :json, @microposts
	end

	def show
		@micropost = Micropost.find(params[:id])
	end

end
