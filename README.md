# INT202-JavaScript

Array method
* .forEach() เข้าไปในแต่ละ element ใน array ไม่มีการ return ค่าออกมา
* .filter() เข้าในทุก element มาเช็คเงื่อนไข return new array
* .map() เข้าไปในแต่ละ element และ return new array
* .find()  เข้าในทุก element มาเช็คเงื่อนไข return เป็น element ตัวแรกที่ผ่านเงื่อนไข ‼️ไม่เจอจะ undefined
* .findIndex() เข้าในทุก element มาเช็คเงื่อนไข return เป็น index ตัวแรกที่ผ่านเงื่อนไข ‼️ไม่เจอจะ -1
* .every() เข้าในทุก element มาเช็คเงื่อนไข แต่ต้องผ่านทุกตัว return Boolean 
* .some() เข้าในทุก element มาเช็คเงื่อนไข แต่ต้องมีอย่างน้อย 1 ตัว return Boolean 
* .reduce() เข้าไปในทุก element แล้วทำการยุบค่า parameter ที่รับต้อง 2 ตัว(ค่าที่รับเลขที่ยุบแล้วเหลือ single value , element ในแต่ละ array) สามารถกำหนด default เริ่มต้นของ parameter ตัวแรกได้ return value
* .push() เพิ่ม element ที่ท้าย array  เพิ่มได้หลาย element ใน 1 ครั้ง return array เดิม แต่ new length
* .pop() เก็บค่าตัวสุดท้ายของ array แล้ว return ตัวสุดท้ายใน array (ถ้า console.log ดู array ค่าตัวสุดท้ายนั้นจะหายไป)
* .shift() เก็บค่าตัวแรกของ array แล้ว return ตัวแรกใน array (ถ้า console.log ดู array ค่าตัวแรกนั้นจะหายไป)
* .unshift() เพิ่ม element ที่หน้า array return array เดิม แต่ new length
* .splice() แก้ไขและเปลี่ยนแปลงอาร์เรย์ โดยลบหรือแทนที่สมาชิกในอาร์เรย์ หรือเพิ่มสมาชิกใหม่ลงในอาร์เรย์ โดยใช้การตัดตำแหน่งของสมาชิกในอาร์เรย์ตามดัชนี (index) | array.splice(start, deleteCount, item1, item2, ...); deleteCount 0 or negative = ไม่ลบ element
* .slice() ใส่ได้ 2 parameter (indexstart,indexend-1) แต่ indexend สามารถเว้นได้ return new array ที่ copy มาจาก array ต้นฉบับ
* .fill() เปลี่ยนทุก element ใน array แต่ถ้าอยากเปลี่ยนเฉพาะบางตัวต้องใช้ start index ช่วย | รับ 3 parameter (ค่าที่จะ replace,startindex,end(arrat.length))
* .reverse() return array ตัวเดิม
* .include() มีทั้งใน string , array หาคำทีอยู่ใน element ต้องตรงทุกตัวอักษร เป็น case sensitive
* .split() ทำให้ string เป็น array ได้ | ทำการเปลี่ยนแปลง array ตัวเก่า ไม่ได้สร้าง array ใหม่
* .sort() เรียงลำดับ return array sort
* .concat() ใช้สำหรับเชื่อมต่อสองอาเรย์เข้าด้วยกัน และส่งค่ากลับเป็นอาเรย์ใหม่ที่ได้รับการเชื่อมต่อแล้ว
* .flat()  จะลบอาร์เรย์ซ้อนกันและทำให้สมาชิกอยู่ในอาร์เรย์เดียว 
* .indexof() หา first index ที่ตรงกับเงื่อนไข สามารถเพิ่มเริ่มต้น index จากตำแหน่งไหนได้ return ค่า index ถ้าไม่เจอ -1 
* .join() เปลี่ยน array เป็น string สามารถเพิ่มตัวคั่นได้
