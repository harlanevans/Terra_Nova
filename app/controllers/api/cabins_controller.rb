class Api::CabinsController < ApplicationController
  def index
    render json: Cabin.all
  end

  def edit
    @cabin = Cabin.find(params[:id])
  end

  def create
    @cabin = Cabin.new(cabin_params)
    if @cabin.save
      render json: @cabin
    else
      render json: { errors: @cabin.errors }, status: unprocessable_entity
    end
  end

  def update
    @cabin = Cabin.find(params[:id])
    @cabin.update
    render json: @cabin
  end

  def destroy
    @cabin = Cabin.find(params[:id]).destroy
    render json: { message: 'Cabin is deleted' }
  end

  private
  def cabin_params
    params.require(:cabin).permit(:beds, :baths, :suite, :pets, :max_occupancy)
  end
end
