import { is } from "@deepkit/type";

type FeePath = { path: "sub"; currency: string } | "parent";


console.log(is<FeePath>("parent"));
console.log(is<FeePath>({path: "sub", currency: ""}));
console.log(is<FeePath>({path: "sub_", currency: ""}));
