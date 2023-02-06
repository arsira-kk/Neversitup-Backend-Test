"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const authentication_entity_1 = require("./authentication.entity");
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let AuthenticationService = class AuthenticationService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
        this.registerArray = [];
    }
    adduserregister(username, password, fname, lname, email, phone) {
        const reg = new authentication_entity_1.Users();
        reg.id = (0, uuid_1.v1)();
        reg.username = username;
        reg.password = password;
        reg.fname = fname;
        reg.lname = lname;
        reg.email = email;
        reg.phone = phone;
        this.registerArray.push(reg);
    }
    async creaetUser(createUserDto) {
        const tem = this.usersRepository.countBy({ username: createUserDto.username });
        const test = await tem;
        if (test >= 1) {
            return "Duplicate username";
        }
        else {
            return this.usersRepository.save(createUserDto);
        }
    }
    async auth(username, password) {
        const tem = await this.usersRepository.findOneBy({ username });
        if (tem && tem.password === password) {
            const { password } = tem, result = __rest(tem, ["password"]);
            return result;
        }
        return null;
    }
};
AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(authentication_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map