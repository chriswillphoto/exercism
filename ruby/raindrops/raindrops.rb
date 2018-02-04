module BookKeeping
  VERSION=3
end

class Raindrops

  def self.convert(num)
    drops = ""

    if num % 3 == 0
      drops << "Pling"
    end
    if num % 5 == 0
      drops << "Plang"
    end
    if num % 7 == 0
      drops << "Plong"
    end
    if drops == ""
      drops = num
    end

    return drops.to_s
  end
end
