class Api::ReservationsController < ApplicationController
# Before action of setting Cabin.

  def index
    render json: Reservation.all
  end

  def edit
    @reservation = Reservation.find(params[:id])
  end

  def find_reservations
    render json: Reservation.find_reservations(params[:id])
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render json: @reservation
    else
      render json: { errors: @reservation.errors }, status: unprocessable_entity
    end
  end
  
  def update
    @reservation = Reservation.find(params[:id])
    @reservation.update
    render json: @reservation
  end

  def destroy
    @reservation = Reservation.find(params[:id]).destroy
    render json: { message: 'Reservation is deleted' }
  end

  private
  def reservation_params
    params.require(:reservation).permit(:adults, :kids, :start_date, :end_date)
  end
end
