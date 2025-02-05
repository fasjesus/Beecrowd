A = gets.chomp.to_f
B = gets.chomp.to_f

A = A * 3.5
B = B * 7.5
MEDIA = (A + B) / (3.5 + 7.5)

puts "MEDIA = #{sprintf('%.5f', MEDIA)}"