require 'rails_helper'

RSpec.describe Cabin, type: :model do
  describe 'attributes' do
    it 'has a bed' do
      beds = 1
      cabin = Cabin.create(beds: beds)
      expect(cabin.beds).to eq(beds)
    end
  end

  describe 'attributes' do
    it 'has a bath' do
      baths = 1
      cabin = Cabin.create(baths: baths)
      expect(cabin.baths).to eq(baths)
    end
  end

  describe 'attributes' do
    it 'is a suite' do
      suite = true
      cabin = Cabin.create(suite: suite)
      expect(cabin.suite).to eq(suite)
    end
  end

  describe 'attributes' do
    it 'is not a suite' do
      suite = false
      cabin = Cabin.create(suite: suite)
      expect(cabin.suite).to eq(suite)
    end
  end

  describe 'attributes' do
    it 'allows pets' do
      pets = true
      cabin = Cabin.create(pets: pets)
      expect(cabin.pets).to eq(pets)
    end
  end

  describe 'attributes' do
    it 'doesnt allow pets' do
      pets = false
      cabin = Cabin.create(pets: pets)
      expect(cabin.pets).to eq(pets)
    end
  end

  describe 'attributes' do
    it 'has a max occupancy' do
      max_occupancy = 500
      cabin = Cabin.create(max_occupancy: max_occupancy)
      expect(cabin.max_occupancy).to eq(max_occupancy)
    end
  end

describe "validations" do
  before(:each) do
  @cabin = Cabin.create(beds: 1, baths: 1, suite: true, pets: true, max_occupancy: 5)
  it { should validate_presence_of :beds }
  it { should validate_presence_of :baths }
  it { should validate_presence_of :suite }
  it { should validate_presence_of :pets }
  it { should validate_presence_of :max_occupancy }

  it 'has an occupancy lower bound' do
    should validate_numericality_of(:max_occupancy).
    is_greater_than_or_equal_to(0)
  end

  it 'has an occupancy higher bound' do
    should validate_numericality_of(:max_occupancy).
    is_less_than_or_equal_to(50)
  end

  describe "association" do
    it { should have_many(:reservations) }
    # it { should have_many(:students).dependent(:destroy) }
  end

end
end
end
