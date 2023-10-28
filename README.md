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
* .splice() 
* .slice() ใส่ได้ 2 parameter (indexstart,indexend-1) แต่ indexend สามารถเว้นได้ return new array ที่ copy มาจาก array ต้นฉบับ
* .fill() เปลี่ยนทุก element ใน array แต่ถ้าอยากเปลี่ยนเฉพาะบางตัวต้องใช้ start index ช่วย
* .reverse() return array ตัวเดิม
* .include() มีทั้งใน string , array หาคำที
* .splice() ทำให้ string เป็น array ได้
* .sort() เรียงลำดับ return array sort
* .concat()
* .flat()
* .indexof() หา first index ที่ตรงกับเงื่อนไข สามารถเพิ่มเริ่มต้น index จากตำแหน่งไหนได้ return ค่า index ถ้าไม่เจอ -1 
* .join() เปลี่ยน array เป็น string สามารถเพิ่มตัวคั่นได้
